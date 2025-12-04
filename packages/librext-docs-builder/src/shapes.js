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
    const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);

    for (const [cardType, cardData] of Object.entries(uiSpec.cards)) {
        const selector = `.card.${cardType}`
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
