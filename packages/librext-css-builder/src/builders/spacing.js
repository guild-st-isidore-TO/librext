"use strict"

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import libRextCssFileHandler from './file-handler.js'
import libRextCssUtil from './utils.js'

const buildSpacing = () => {
    // console.log('[LibRext CSS - SpacingBuilder] uiSpec', uiSpec);
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
