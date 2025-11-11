"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')

const buildSpacing = () => {
    const spacingDataFile = `${libRextCssUtil.dataDir}/spacing.json`
    const spacingData = libRextCssFileHandler.readFile(spacingDataFile)
    // console.log('[LibRext CSS - SpacingBuilder] spacingData', spacingData)
    let prefaceContent = '@import "./librext-base.css";\n'
    let spacingContent = '';
    const styleVars = []

    for (const scaleKey in spacingData.spacingScale) {
        const scaleVal = spacingData.spacingScale[scaleKey]
        styleVars.push({
            property: `space-${scaleKey}`,
            value: `${scaleVal}px`,
        })
    }

    spacingContent += libRextCssUtil.writeCssVarRule(libRextCssUtil.ROOT_SELECTOR, styleVars);
    spacingContent += '\n'

    const divRules = [
        { property: 'margin', value: 'var(--space-md)' }
    ]

    let divContent = libRextCssUtil.writeCssRule('div', divRules)
    const allContent = prefaceContent + '\n' + spacingContent + divContent

    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-spacing.css`, allContent)
}

module.exports = { build: buildSpacing };
