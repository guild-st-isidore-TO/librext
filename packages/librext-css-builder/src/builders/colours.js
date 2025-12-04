"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')
// const { uiSpec } = require(libRextCssUtil.dataUiSpecDir)

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

const buildColours = (uiSpec, outputDir) => {
    // console.log('[LibRext CSS - ColourBuilder] uiSpec', uiSpec);
    let varsSelector = ':root'
    if (scope == 'local') {
        varsSelector = defaultLocalScope
    } else if (scope == 'custom') {
        varsSelector = customLocalScope
    }

    const styleVars = []

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

    let variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);
    variablesContent += '\n'

    const baseRules = [
        { property: 'background-color', value: 'var(--col-background)' }
    ]
    let baseContent = libRextCssUtil.writeCssRule('body', baseRules)

    const allContent = variablesContent + baseContent

    libRextCssFileHandler.writeFile(`${outputDir}/css/librext-colours.css`, allContent)
}

module.exports = { build: buildColours };
