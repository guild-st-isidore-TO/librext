"use strict"

import libRextCssFileHandler from './file-handler.js'
import libRextCssUtil from './utils.js'

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

const buildColours = (uiSpec, outputDir, config) => {
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
    let linkColoursContent = ''

    for (const [colName, colValue] of Object.entries(uiSpec.colors)) {
        // console.log('[LibRext CSS - ColourBuilder] basicRoles', basicRole)
        if (colName != 'modes') {
            varProps.push({
                property: `${config.tokenPrefix}-col-${colName}`,
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
            colClassContent += libRextCssUtil.writeCssRule(`.${config.tokenPrefix}-col-${colName}`, colClassProps)
            bgColClassContent += libRextCssUtil.writeCssRule(`.${config.tokenPrefix}-bgcol-${colName}`, bgColClassProps)
        } else {
            for (const [darkColName, darkColValue] of Object.entries(uiSpec.colors.modes.dark)) {
                varProps.push({
                    property: `${config.tokenPrefix}-col-dark-${darkColName}`,
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
                colDarkClassContent += libRextCssUtil.writeCssRule(`.${config.tokenPrefix}-col-dark-${darkColName}`, colDarkClassProps)
                bgColDarkClassContent += libRextCssUtil.writeCssRule(`.${config.tokenPrefix}-bgcol-dark-${darkColName}`, bgColDarkClassProps)
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
        { property: 'background-color', value: 'var(--fix-this-col-background)' }
    ]
    let baseContent = libRextCssUtil.writeCssRule('body', baseRules)

    const linkRuleCol = uiSpec.colors[config.linkColour]
    const linkRules = [
        { property: 'color', value: linkRuleCol },
        { property: 'text-decoration-color', value: linkRuleCol }
    ]
    linkColoursContent += libRextCssUtil.writeCssRule('a:link, .${config.tokenPrefix}-link:link', linkRules) + '\n'

    const visitedRuleCol = uiSpec.colors[config.linkColourVisited]
    const visitedRules = [
        { property: 'color', value: visitedRuleCol },
        { property: 'text-decoration-color', value: visitedRuleCol }
    ]
    linkColoursContent += libRextCssUtil.writeCssRule('a:visited, .${config.tokenPrefix}-link:visited', visitedRules) + '\n'

    const hoverRuleCol = uiSpec.colors[config.linkColourHover]
    const hoverRules = [
        { property: 'color', value: hoverRuleCol },
        { property: 'text-decoration-color', value: hoverRuleCol }
    ]
    linkColoursContent += libRextCssUtil.writeCssRule('a:hover, .${config.tokenPrefix}-link:hover', hoverRules) + '\n'

    const activeRuleCol = uiSpec.colors[config.linkColourActive]
    const activeRules = [
        { property: 'color', value: activeRuleCol },
        { property: 'text-decoration-color', value: activeRuleCol }
    ]
    linkColoursContent += libRextCssUtil.writeCssRule('a:active, .${config.tokenPrefix}-link:active', activeRules) + '\n'


    const allContent = variablesContent + baseContent + colClassContent + bgColClassContent + colDarkClassContent + bgColDarkClassContent + linkColoursContent

    libRextCssFileHandler.writeFile(`${outputDir}/css/${config.filenamePrefix}-colours.css`, allContent)
}

// module.exports = { build: buildColours };
export default buildColours