"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')
const uiSpec = require(libRextCssUtil.dataUiSpecDir)

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

const buildBase = () => {
    // console.log('[LibRext CSS - BaseBuilder] uiSpec', uiSpec);
    let varsSelector = ':root'
    if (scope == 'local') {
        varsSelector = defaultLocalScope
    } else if (scope == 'custom') {
        varsSelector = customLocalScope
    }

    const styleVars = []

    for (const [key, value] of Object.entries(baseData.definitions.librextScale)) {
        const scaleVar = {
            property: `librext-scale-${key.replace('ls', '')}`,
            value: `${value}px`,
        }
        styleVars.push(scaleVar);
    }

    const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);
    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-base.css`, variablesContent)
}

module.exports = { build: buildBase };
