"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

const buildShapes = () => {
    let varsSelector = ':root'
    if (scope == 'local') {
        varsSelector = defaultLocalScope
    } else if (scope == 'custom') {
        varsSelector = customLocalScope
    }

    // const baseDataFile = `${libRextCssUtil.dataDir}/base.json`
    // const baseData = libRextCssFileHandler.readFile(shapeDataFile)

    const shapeDataFile = `${libRextCssUtil.dataDir}/shapes.json`
    const shapeData = libRextCssFileHandler.readFile(shapeDataFile)
    // console.log('[LibRext CSS - ShapesBuilder] shapeData', shapeData)

    const styleVars = []

    let prefaceContent = '@import "./librext-base.css";\n'

    // for (const [key, value] of Object.entries(shapeData.librextScale)) {
    //     const scaleVar = {
    //         property: `librext-scale-${key.replace('ls', '')}`,
    //         value: `${value}px`,
    //     }
    //     styleVars.push(scaleVar);
    // }

    const cRadiusScale = shapeData.cornerRadiusScale
    for (const [key, value] of Object.entries(cRadiusScale)) {
        const cRadiusEntry = {
            property: `cor-radius-${key}`,
            value: `var(--librext-scale-${value.replace('ls', '')})`,
        }
        styleVars.push(cRadiusEntry);
    }

    for (const [key, value] of Object.entries(shapeData.elementHeightScale)) {
        const heightEntry = {
            property: `height-${key}`,
            value: `var(--librext-scale-${value.replace('ls', '')})`,
        }
        styleVars.push(heightEntry);
    }

    // console.log('[LibRext CSS - ShapesBuilder] styleVars', styleVars)

    const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);
    const allContent = prefaceContent + '\n' + variablesContent

    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-shapes.css`, allContent)
}

module.exports = { build: buildShapes };
