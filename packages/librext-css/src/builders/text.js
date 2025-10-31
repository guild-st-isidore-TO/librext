"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

const getTypefaceCategory = (typefaceKey) => {
    for (let ctgIdx = 0; ctgIdx < libRextCssUtil.fontData.categories.length; ctgIdx++) {
        const ctg = libRextCssUtil.fontData.categories[ctgIdx]
        const keyHasCtg = typefaceKey.includes(ctg);
        if (keyHasCtg) {
            return ctg
        }
    }
    return 'serif'
}

const getTypefaceVariant = (typefaceKey) => {
    const keyHasAlt = typefaceKey.includes('Alt');
    return keyHasAlt ? 'secondary' : 'primary';
}

const buildText = () => {
    let varsSelector = ':root'
    if (scope == 'local') {
        varsSelector = defaultLocalScope
    } else if (scope == 'custom') {
        varsSelector = customLocalScope
    }

    const textDataFile = `${libRextCssUtil.dataDir}/text.json`
    const textData = libRextCssFileHandler.readFile(textDataFile)
    console.log('[LibRext CSS - TextBuilder] textData', textData.typefaces)

    const styleVars = [
        { property: 'test-val-1', value: '#ff00ff' },
        { property: 'test-val-2', value: '#ffff00' },
        { property: 'test-val-3', value: '#ff0000' },
        { property: 'test-val-4', value: '#00ffff' },
    ]

    const typefaces = []
    for (const typefaceCtg in textData.typefaces) {
        const dataTypefaceList = textData.typefaces[typefaceCtg]
        const typefaceList = dataTypefaceList.map((typeName, idx) => {
            return {
                name: typeName,
                category: typefaceCtg,
                priority: idx + 1
            }
        })
        typefaces.push(...typefaceList)
    }
    console.log('[LibRext CSS - TextBuilder] typefaces', typefaces)

    const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);

    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-text.css`, variablesContent)
}

module.exports = { build: buildText };
