"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')
const { uiSpec } = require(libRextCssUtil.dataUiSpecDir)

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

const buildColours = () => {
    console.log('[LibRext CSS - ColourBuilder] uiSpec', uiSpec);
    let varsSelector = ':root'
    if (scope == 'local') {
        varsSelector = defaultLocalScope
    } else if (scope == 'custom') {
        varsSelector = customLocalScope
    }

    const styleVars = []

    // const greyPalette = uiSpec.libRextData.palette.grey
    // greyPalette.forEach((val, idx) => {
    //     const greyEntry = {
    //         property: `grey-${idx}`,
    //         value: val,
    //     }
    //     styleVars.push(greyEntry);
    // })

    // const themePalette = uiSpec.libRextData.palette.theme
    // for (const [key, value] of Object.entries(themePalette)) {
    //     const themeEntry = {
    //         property: `theme-${key}`,
    //         value,
    //     }
    //     styleVars.push(themeEntry);
    // }

    for (const [colName, colValue] of Object.entries(uiSpec.colors)) {
        // console.log('[LibRext CSS - ColourBuilder] basicRoles', basicRole)
        if (colName != 'modes') {
            styleVars.push({
                property: `col-${colName}`,
                value: colValue,
            });
        } else {
            for (const [darkColName, darkColValue] of Object.entries(uiSpec.colors.modes.dark)) {
                styleVars.push({
                    property: `col-dark-${darkColName}`,
                    value: darkColValue,
                });
            }
        }
    }

    // for (const textRole of colourData.variables.rolepalette.text) {
    //     console.log('[LibRext CSS - ColourBuilder] textRoles', textRole)
    //     styleVars.push({
    //         property: `col-${textRole.role.replace('.', '-')}`,
    //         value: `var(--${textRole.colour.replace('.', '-')})`,
    //     });
    // }

    // for (const indicatorRole of colourData.variables.rolepalette.indicator) {
    //     console.log('[LibRext CSS - ColourBuilder] indicatorRoles', indicatorRole)
    //     styleVars.push({
    //         property: `col-${indicatorRole.role.replace('.', '-')}`,
    //         value: `var(--${indicatorRole.colour.replace('.', '-')})`,
    //     });
    // }

    // for (const accentRole of colourData.variables.rolepalette.accent) {
    //     console.log('[LibRext CSS - ColourBuilder] accentRoles', accentRole)
    //     styleVars.push({
    //         property: `col-${accentRole.role.replace('.', '-')}`,
    //         value: `var(--${accentRole.colour.replace('.', '-')})`,
    //     });
    // }

    // console.log('[LibRext CSS - ColourBuilder] styleVars', styleVars)

    let variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);
    variablesContent += '\n'

    const baseRules = [
        { property: 'background-color', value: 'var(--col-background)' }
    ]
    let baseContent = libRextCssUtil.writeCssRule('body', baseRules)

    const allContent = variablesContent + baseContent

    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-colours.css`, allContent)
}

module.exports = { build: buildColours };
