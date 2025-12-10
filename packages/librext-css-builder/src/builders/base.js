"use strict"

import fileHandler from '../file-handler.js'
import cssHandler from '../css-handler.js'

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

const buildBase = (uiSpec, outputDir, config) => {
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
            property: `${config.tokenPrefix}-scale-${idx + 1}`,
            value: `${sizeNum}px`,
        }
        styleVars.push(scaleVar);
    })
    
    uiSpec.space.forEach((spaceNum, idx) => {
        const scaleVar = {
            property: `${config.tokenPrefix}-space-${idx + 1}`,
            value: `${spaceNum}px`,
        }
        styleVars.push(scaleVar);
    })

    const variablesContent = cssHandler.writeCssVarRule(varsSelector, styleVars);
    fileHandler.writeFile(`${outputDir}/css/${config.filenamePrefix}-base.css`, variablesContent)
}

// module.exports = { build: buildBase };
export default buildBase