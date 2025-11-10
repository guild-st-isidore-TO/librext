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




    const basicRoles = colourData.roles.basic;
    const basicVariants = [
        ...colourData.variants.lighting,
    ];
    let basicRoleVariants = libRextCssUtil.getPermutationsOfArrays(basicRoles, basicVariants)
    basicRoleVariants = basicRoleVariants.map(vars => vars.join('.'))
    console.log('[LibRext CSS - ColourBuilder] basicRoleVariants', basicRoleVariants)


    const textRoles = colourData.roles.text;
    const textVariants = [
        ...colourData.variants.lighting,
    ];
    let textRoleVariants = libRextCssUtil.getPermutationsOfArrays(textRoles, textVariants)
    textRoleVariants = textRoleVariants.map(vars => vars.join('.'))
    console.log('[LibRext CSS - ColourBuilder] textRoleVariants', textRoleVariants)


    const indicatorRoles = colourData.roles.indicator;
    const indicatorVariants = [
        ...colourData.variants.lighting,
    ];
    let indicatorRoleVariants = libRextCssUtil.getPermutationsOfArrays(indicatorRoles, indicatorVariants)
    indicatorRoleVariants = indicatorRoleVariants.map(vars => vars.join('.'))
    console.log('[LibRext CSS - ColourBindicatorlder] indicatorRoleVariants', indicatorRoleVariants)


    const accentRoles = colourData.variants.accent;
    const accentVariants = [
        ...colourData.variants.lighting,
    ];
    let accentRoleVariants = libRextCssUtil.getPermutationsOfArrays(accentRoles, accentVariants)
    accentRoleVariants = accentRoleVariants.map(vars => vars.join('.'))
    console.log('[LibRext CSS - ColourBuilder] accentRoleVariants', accentRoleVariants)

    // console.log('[LibRext CSS - ColourBuilder] styleVars', styleVars)

    const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);
    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-colours.css`, variablesContent)
}

module.exports = { build: buildColours };
