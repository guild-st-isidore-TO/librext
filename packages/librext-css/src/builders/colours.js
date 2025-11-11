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
    // console.log('[LibRext CSS - ColourBuilder] colourData', colourData)

    const styleVars = []

    const greyPalette = colourData.palette.grey
    // for (const [key, value] of Object.entries(greyPalette)) {
    greyPalette.forEach((val, idx) => {
        const greyEntry = {
            property: `grey-${idx}`,
            value: val,
        }
        styleVars.push(greyEntry);
    })

    const themePalette = colourData.palette.theme
    for (const [key, value] of Object.entries(themePalette)) {
        const themeEntry = {
            property: `theme-${key}`,
            value,
        }
        styleVars.push(themeEntry);
    }

    for (const basicRole of colourData.rolepalette.basic) {
        console.log('[LibRext CSS - ColourBuilder] basicRoles', basicRole)
        styleVars.push({
            property: `col-${basicRole.role.replace('.', '-')}`,
            value: `var(--${basicRole.colour.replace('.', '-')})`,
        });
    }

    for (const textRole of colourData.rolepalette.text) {
        console.log('[LibRext CSS - ColourBuilder] textRoles', textRole)
        styleVars.push({
            property: `col-${textRole.role.replace('.', '-')}`,
            value: `var(--${textRole.colour.replace('.', '-')})`,
        });
    }

    for (const indicatorRole of colourData.rolepalette.indicator) {
        console.log('[LibRext CSS - ColourBuilder] indicatorRoles', indicatorRole)
        styleVars.push({
            property: `col-${indicatorRole.role.replace('.', '-')}`,
            value: `var(--${indicatorRole.colour.replace('.', '-')})`,
        });
    }

    for (const accentRole of colourData.rolepalette.accent) {
        console.log('[LibRext CSS - ColourBuilder] accentRoles', accentRole)
        styleVars.push({
            property: `col-${accentRole.role.replace('.', '-')}`,
            value: `var(--${accentRole.colour.replace('.', '-')})`,
        });
    }


    // console.log('[LibRext CSS - ColourBuilder] styleVars', styleVars)

    const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);
    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-colours.css`, variablesContent)
}

module.exports = { build: buildColours };
