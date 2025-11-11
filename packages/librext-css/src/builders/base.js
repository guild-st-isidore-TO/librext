"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

const buildBase = () => {
    let varsSelector = ':root'
    if (scope == 'local') {
        varsSelector = defaultLocalScope
    } else if (scope == 'custom') {
        varsSelector = customLocalScope
    }

    const baseDataFile = `${libRextCssUtil.dataDir}/base.json`
    const baseData = libRextCssFileHandler.readFile(baseDataFile)
    // console.log('[LibRext CSS - ShapesBuilder] shapeData', shapeData)

    const styleVars = []

    for (const [key, value] of Object.entries(baseData.librextScale)) {
        const scaleVar = {
            property: `librext-scale-${key.replace('ls', '')}`,
            value: `${value}px`,
        }
        styleVars.push(scaleVar);
    }

    // console.log('[LibRext CSS - ShapesBuilder] styleVars', styleVars)

    const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);
    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-base.css`, variablesContent)
}

module.exports = { build: buildBase };
