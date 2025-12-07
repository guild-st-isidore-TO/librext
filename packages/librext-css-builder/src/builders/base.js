"use strict"

import libRextCssFileHandler from './file-handler.js'
import libRextCssUtil from './utils.js'

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

const buildBase = (uiSpec, outputDir) => {
    // console.log('[LibRext CSS - BaseBuilder] uiSpec', uiSpec);

    let varsSelector = ':root'
    if (scope == 'local') {
        varsSelector = defaultLocalScope
    } else if (scope == 'custom') {
        varsSelector = customLocalScope
    }

    const styleVars = []
    uiSpec.sizes.forEach((sizeNum, idx) => {
        const scaleVar = {
            property: `lbrxt-scale-${idx + 1}`,
            value: `${sizeNum}px`,
        }
        styleVars.push(scaleVar);
    })
    
    uiSpec.space.forEach((spaceNum, idx) => {
        const scaleVar = {
            property: `lbrxt-space-${idx + 1}`,
            value: `${spaceNum}px`,
        }
        styleVars.push(scaleVar);
    })

    const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);
    libRextCssFileHandler.writeFile(`${outputDir}/css/librext-base.css`, variablesContent)
}

// module.exports = { build: buildBase };
export default buildBase