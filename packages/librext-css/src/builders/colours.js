"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

const buildColours = () => {
    let varsSelector = ':root'
    if (scope == 'local') {
        varsSelector = defaultLocalScope
    } else if (scope == 'custom') {
        varsSelector = customLocalScope
    }

    const colourDataFile = `${libRextCssUtil.dataDir}/colours.json`
    const colourData = libRextCssFileHandler.readFile(colourDataFile)
    console.log('[LibRext CSS - ColourBuilder] colourData', colourData)

    const styleVars = []

    const greyPalette = colourData.palette.greyscale
    for (const [key, value] of Object.entries(greyPalette)) {
        const greyEntry = {
            property: `grey-${key}`,
            value,
        }
        styleVars.push(greyEntry);
    }

    const themePalette = colourData.palette.theme
    for (const [key, value] of Object.entries(themePalette)) {
        const themeEntry = {
            property: `theme-${key}`,
            value,
        }
        styleVars.push(themeEntry);
    }

    console.log(styleVars)

    const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);
    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-colours.css`, variablesContent)
}

module.exports = { build: buildColours };
