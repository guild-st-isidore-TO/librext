"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')
const { uiSpec } = require(libRextCssUtil.dataUiSpecDir)

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

const buildBase = () => {
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
            property: `librext-scale-${idx + 1}`,
            value: `${sizeNum}px`,
        }
        styleVars.push(scaleVar);
    })

    const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);
    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-base.css`, variablesContent)
}

module.exports = { build: buildBase };
