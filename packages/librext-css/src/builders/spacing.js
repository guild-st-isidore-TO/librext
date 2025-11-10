"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')

const buildSpacing = () => {
    const spacingDataFile = `${libRextCssUtil.dataDir}/spacing.json`
    const spacingData = libRextCssFileHandler.readFile(spacingDataFile)
    console.log('[LibRext CSS - SpacingBuilder] spacingData', spacingData)
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

    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-spacing.css`, spacingContent)
}

module.exports = { build: buildSpacing };
