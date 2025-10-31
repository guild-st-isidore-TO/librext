"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

const buildText = () => {
    
    let selectorScope = ':root'
    if (scope == 'local') {
        selectorScope = defaultLocalScope
    } else if (scope == 'custom') {
        selectorScope = customLocalScope
    }

    const styleVars = [
        { property: 'test-val-1', value: '#ff00ff' },
        { property: 'test-val-2', value: '#ffff00' },
        { property: 'test-val-3', value: '#ff0000' },
        { property: 'test-val-4', value: '#00ffff' },
    ]

    const variablesContent = libRextCssUtil.writeCssVarRule(selectorScope, styleVars);
    // console.log('[LibRext CSS - TextBuilder] variablesContent', variablesContent)

    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-text.css`, variablesContent)
}

module.exports = { build: buildText };
