"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')

const buildSpacing = () => {
    const spacingDataFile = `${libRextCssUtil.dataDir}/spacing.json`
    const spacingData = libRextCssFileHandler.readJsonFile(spacingDataFile)
    // console.log('[LibRext CSS - SpacingBuilder] spacingData', spacingData)
    let prefaceContent = '@import "./librext-base.css";\n'
    let spacingContent = '';
    const styleVars = []

    for (const scaleKey in spacingData.definitions.spacingScale) {
        const scaleVal = spacingData.definitions.spacingScale[scaleKey]
        styleVars.push({
            property: `space-${scaleKey}`,
            value: `var(--librext-scale-${scaleVal.replace('ls', '')})`,
        })
    }

    spacingContent += libRextCssUtil.writeCssVarRule(libRextCssUtil.ROOT_SELECTOR, styleVars);
    spacingContent += '\n'

    // const divRules = [
    //     { property: 'margin', value: 'var(--space-md)' }
    // ]

    // let divContent = libRextCssUtil.writeCssRule('div', divRules)
    let divContent = ''

    const pRules = [
        { property: 'margin', value: '0' }
    ]

    let pContent = libRextCssUtil.writeCssRule('p', pRules)

    const ruleContent = divContent + pContent

    const allContent = prefaceContent + '\n' + spacingContent + ruleContent

    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-spacing.css`, allContent)
}

module.exports = { build: buildSpacing };
