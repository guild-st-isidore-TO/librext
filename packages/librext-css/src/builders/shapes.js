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
    prefaceContent += '@import "./librext-spacing.css";\n'
    prefaceContent += '@import "./librext-colours.css";\n'

    let shapesContent = ''

    const cRadiusScale = shapeData.definitions.cornerRadiusScale
    for (const [key, value] of Object.entries(cRadiusScale)) {
        const cRadiusEntry = {
            property: `cor-radius-${key}`,
            value: `var(--librext-scale-${value.replace('ls', '')})`,
        }
        styleVars.push(cRadiusEntry);
    }

    for (const [key, value] of Object.entries(shapeData.definitions.elementHeightScale)) {
        const heightEntry = {
            property: `height-${key}`,
            value: `var(--librext-scale-${value.replace('ls', '')})`,
        }
        styleVars.push(heightEntry);
    }

    // console.log('[LibRext CSS - ShapesBuilder] styleVars', styleVars)

    const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);

    shapeData.variables.shapeDefinitions.forEach((shapeDef, idx) => {
        const selectorParts = shapeDef.name.split('.')
        const selectorBase = selectorParts[0]
        const selectorSize = selectorParts[1]

        const selector = `.${shapeDef.name}`

        const shadowScaleVal = shapeData.definitions.boxShadowScale[shapeDef.boxShadow]
        const boxShadowVal = `${shadowScaleVal.len} ${shadowScaleVal.len} ${shadowScaleVal.blur} var(--grey-10)`

        const props = [
            {
                property: 'height',
                value: `var(--height-${shapeDef.height})`,
            },
            {
                property: 'border-radius',
                value: `var(--cor-radius-${shapeDef.cornerRadius})`,
            },
            {
                property: 'padding',
                value: `var(--space-${shapeDef.padding})`,
            },
            {
                property: 'background-color',
                value: `var(--col-${shapeDef.background}-light)`,
            },
            {
                property: 'box-shadow',
                value: boxShadowVal,
            },
        ]
        shapesContent += libRextCssUtil.writeCssRule(selector, props)

        if (selectorSize && selectorSize == 'md') {
            shapesContent += libRextCssUtil.writeCssRule(`.${selectorBase}`, props)
        }

    })

    const allContent = prefaceContent + '\n' + variablesContent + '\n' + shapesContent

    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-shapes.css`, allContent)
}

module.exports = { build: buildShapes };
