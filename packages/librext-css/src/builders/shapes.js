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

    const shapeDataFile = `${libRextCssUtil.dataDir}/shapes.json`
    const shapeData = libRextCssFileHandler.readFile(shapeDataFile)
    // console.log('[LibRext CSS - ShapesBuilder] shapeData', shapeData)
    
    const styleVars = []
    
    const cRadiusScale = shapeData.cornerRadiusScale
    for (const [key, value] of Object.entries(cRadiusScale)) {
        const cRadiusEntry = {
            property: `corner-radius-${key}`,
            value: `${value}px`,
        }
        styleVars.push(cRadiusEntry);
    }
    
    for (const [key, value] of Object.entries(shapeData.elementHeightScale)) {
        const heightEntry = {
            property: `element-height-${key}`,
            value: `${value}px`,
        }
        styleVars.push(heightEntry);
    }
    
    // console.log('[LibRext CSS - ShapesBuilder] styleVars', styleVars)

    const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);
    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-shapes.css`, variablesContent)
}

module.exports = { build: buildShapes };
