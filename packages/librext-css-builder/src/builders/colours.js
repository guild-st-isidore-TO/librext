"use strict"

import libRextCssFileHandler from './file-handler.js'
import libRextCssUtil from './utils.js'

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

    const varProps = []
    let colClassContent = ''
    let bgColClassContent = ''
    let colDarkClassContent = ''
    let bgColDarkClassContent = ''

    for (const [colName, colValue] of Object.entries(uiSpec.colors)) {
        // console.log('[LibRext CSS - ColourBuilder] basicRoles', basicRole)
        if (colName != 'modes') {
            varProps.push({
                property: `lbrxt-col-${colName}`,
                value: colValue,
            });
            const colClassProps = [{
                property: `color`,
                value: colValue,
            }]
            const bgColClassProps = [{
                property: `background-color`,
                value: colValue,
            }]
            colClassContent += libRextCssUtil.writeCssRule(`.lbrxt-col-${colName}`, colClassProps)
            bgColClassContent += libRextCssUtil.writeCssRule(`.lbrxt-bgcol-${colName}`, bgColClassProps)
        } else {
            for (const [darkColName, darkColValue] of Object.entries(uiSpec.colors.modes.dark)) {
                varProps.push({
                    property: `lbrxt-col-dark-${darkColName}`,
                    value: darkColValue,
                });
                const colDarkClassProps = [{
                    property: `color`,
                    value: darkColValue,
                }]
                const bgColDarkClassProps = [{
                    property: `background-color`,
                    value: darkColValue,
                }]
                colDarkClassContent += libRextCssUtil.writeCssRule(`.lbrxt-col-dark-${darkColName}`, colDarkClassProps)
                bgColDarkClassContent += libRextCssUtil.writeCssRule(`.lbrxt-bgcol-dark-${darkColName}`, bgColDarkClassProps)
            }
        }
    }

    let variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, varProps);
    variablesContent += '\n'
    colClassContent += '\n'
    bgColClassContent += '\n'
    colDarkClassContent += '\n'
    bgColDarkClassContent += '\n'

    const baseRules = [
        { property: 'background-color', value: 'var(--lbrxt-col-background)' }
    ]
    let baseContent = libRextCssUtil.writeCssRule('body', baseRules)

    const allContent = variablesContent + baseContent + colClassContent + bgColClassContent + colDarkClassContent + bgColDarkClassContent

    libRextCssFileHandler.writeFile(`${outputDir}/css/librext-colours.css`, allContent)
}

// module.exports = { build: buildColours };
export default buildColours