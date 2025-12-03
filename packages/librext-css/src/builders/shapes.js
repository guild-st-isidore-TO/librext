"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')
const { uiSpec } = require(libRextCssUtil.dataUiSpecDir)

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

const buildShapes = () => {
    // console.log('[LibRext CSS - ShapesBuilder] uiSpec', uiSpec);
    let varsSelector = ':root'
    if (scope == 'local') {
        varsSelector = defaultLocalScope
    } else if (scope == 'custom') {
        varsSelector = customLocalScope
    }

    const styleVars = []

    let prefaceContent = '@import "./librext-base.css";\n'
    prefaceContent += '@import "./librext-spacing.css";\n'
    prefaceContent += '@import "./librext-colours.css";\n'

    let shapesContent = ''

    // const cRadiusScale = shapeData.definitions.cornerRadiusScale
    // for (const [key, value] of Object.entries(cRadiusScale)) {
    uiSpec.radii.forEach((radVal, idx) => {
        const cRadiusEntry = {
            property: `cor-radius-${idx + 1}`,
            value: radVal,
        }
        styleVars.push(cRadiusEntry);
    })

    for (const [widgetHtKey, widgetHtVars] of Object.entries(uiSpec.widgetHeights)) {
        const heightEntry = {
            property: `widget-ht-${widgetHtKey}`,
            value: `${widgetHtVars.height}px`,
        }
        styleVars.push(heightEntry);
    }

    // console.log('[LibRext CSS - ShapesBuilder] styleVars', styleVars)

    const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);

    // uiSpec.cards.forEach((shapeDef, idx) => {
    for (const [cardType, cardData] of Object.entries(uiSpec.cards)) {
        console.log('[LibRext CSS - ShapesBuilder] cardType', cardType)
        console.log('[LibRext CSS - ShapesBuilder] cardData', cardData)
        // const selectorParts = shapeDef.name.split('.')
        // const selectorBase = selectorParts[0]
        // const selectorSize = cardType

        const selector = `.card.${cardType}`
        // const shadowScaleVal = shapeData.definitions.boxShadowScale[cardData.boxShadow]
        // const boxShadowVal = `${shadowScaleVal.len} ${shadowScaleVal.len} ${shadowScaleVal.blur} var(--grey-10)`

        const props = [
            {
                property: 'height',
                value: `${uiSpec.sizes[cardData.height]}px`,
            },
            {
                property: 'border-radius',
                value: uiSpec.radii[cardData.borderRadius],
            },
            {
                property: 'padding',
                value: `${uiSpec.space[cardData.padding]}px`,
            },
            {
                property: 'box-shadow',
                value: uiSpec.shadows[cardData.boxShadow],
            },
        ]
        shapesContent += libRextCssUtil.writeCssRule(selector, props)

        if (cardType == 'md') {
            shapesContent += libRextCssUtil.writeCssRule('.card', props)
        }
    }

    const allContent = prefaceContent + '\n' + variablesContent + '\n' + shapesContent

    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-shapes.css`, allContent)
}

module.exports = { build: buildShapes };
