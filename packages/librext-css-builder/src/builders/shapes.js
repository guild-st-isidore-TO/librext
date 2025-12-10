"use strict"

import fileHandler from '../file-handler.js'
import cssHandler from '../css-handler.js'

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

const buildShapes = (uiSpec, outputDir, config) => {
    // console.log('[LibRext CSS - ShapesBuilder] uiSpec', uiSpec);
    let varsSelector = ':root'
    if (scope == 'local') {
        varsSelector = defaultLocalScope
    } else if (scope == 'custom') {
        varsSelector = customLocalScope
    }

    const styleVars = []
    const cRadiusPrefixes = [
        'none',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
    ]
    let prefaceContent = '@import "./librext-base.css";\n'
    prefaceContent += '@import "./librext-colours.css";\n'

    let shapesContent = ''

    uiSpec.radii.forEach((radVal, idx) => {
        const cPrefix = cRadiusPrefixes[idx]
        const cRadiusEntry = {
            property: `${config.tokenPrefix}-cor-radius-${cPrefix}`,
            value: radVal,
        }
        styleVars.push(cRadiusEntry);
        const selector = `.${config.tokenPrefix}-b-radius.${cPrefix}`
        const props = [
            {
                property: 'border-radius',
                value: radVal,
            },
        ]
        shapesContent += cssHandler.writeCssRule(selector, props)
    })

    // uiSpec.shadows.forEach((shadowVal, idx) => {
    for (const [shadowSize, shadowVal] of Object.entries(uiSpec.shadows)) {
        // const sPrefix = cRadiusPrefixes[idx]
        const sRadiusEntry = {
            property: `${config.tokenPrefix}-box-shadow-${shadowSize}`,
            value: shadowVal,
        }
        styleVars.push(sRadiusEntry);
        const selector = `.${config.tokenPrefix}-b-shadow.${shadowSize}`
        const props = [
            {
                property: 'box-shadow',
                value: shadowVal,
            },
        ]
        shapesContent += cssHandler.writeCssRule(selector, props)
    }

    for (const [widgetHtKey, widgetHtVars] of Object.entries(uiSpec.widgetHeights)) {
        const heightEntry = {
            property: `${config.tokenPrefix}-widget-ht-${widgetHtKey}`,
            value: widgetHtVars.height,
        }
        styleVars.push(heightEntry);

        const selector = `.${config.tokenPrefix}-widget.${widgetHtKey}`
        const props = [
            {
                property: 'height',
                value: widgetHtVars.height,
            },
        ]
        shapesContent += cssHandler.writeCssRule(selector, props)
    }
    const variablesContent = cssHandler.writeCssVarRule(varsSelector, styleVars);

    for (const [cardType, cardData] of Object.entries(uiSpec.cards)) {
        const selector = `.${config.tokenPrefix}-card.${cardType}`
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
        shapesContent += cssHandler.writeCssRule(selector, props)

        if (cardType == 'md') {
            shapesContent += cssHandler.writeCssRule(`.${config.tokenPrefix}-card`, props)
        }
    }

    const allContent = prefaceContent + '\n' + variablesContent + '\n' + shapesContent

    fileHandler.writeFile(`${outputDir}/css/${config.filenamePrefix}-shapes.css`, allContent)
}

// module.exports = { build: buildShapes };
export default buildShapes