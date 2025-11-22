"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')

const buildLayout = () => {
    const layoutDataFile = `${libRextCssUtil.dataDir}/layout.json`
    const layoutData = libRextCssFileHandler.readJsonFile(layoutDataFile)
    // console.log('[LibRext CSS - LayoutBuilder] layoutData', layoutData)

    let layoutContent = '';
    const styleVars = []

    for (const sectionLevel of layoutData.variables.sectionLevels) {
        // const scaleVal = layoutData.layoutScale[scaleKey]
        // const property
        console.log('[LibRext CSS - LayoutBuilder] sectionLevel', sectionLevel)
    }

    // layoutContent += libRextCssUtil.writeCssVarRule(libRextCssUtil.ROOT_SELECTOR, styleVars);

    // libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-layout.css`, layoutContent)
}

module.exports = { build: buildLayout };
