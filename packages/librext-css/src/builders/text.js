"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

const buildText = () => {
    let varsSelector = ':root'
    if (scope == 'local') {
        varsSelector = defaultLocalScope
    } else if (scope == 'custom') {
        varsSelector = customLocalScope
    }

    const textDataFile = `${libRextCssUtil.dataDir}/text.json`
    const textData = libRextCssFileHandler.readFile(textDataFile)
    console.log('[LibRext CSS - TextBuilder] textData', textData)

    const styleVars = [
        { property: 'test-val-1', value: '#ff00ff' },
        { property: 'test-val-2', value: '#ffff00' },
        { property: 'test-val-3', value: '#ff0000' },
        { property: 'test-val-4', value: '#00ffff' },
    ]
    const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);

    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-text.css`, variablesContent)
}

module.exports = { build: buildText };
