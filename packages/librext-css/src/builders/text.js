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
    console.log('[LibRext CSS - TextBuilder] textData', textData.typefaces)

    const styleVars = []
    const typefaces = []
    const roles = []
    const typescale = []

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
    const getTypefaceByName = (name) => typefaces.find(tFace => tFace.name == name);

    for (const typefaceRole in textData.roles) {
        const dataTypefaceList = textData.roles[typefaceRole]
        const typefaceList = dataTypefaceList.map((typeName, idx) => {
            const typefaceData = getTypefaceByName(typeName)
            return {
                name: typeName,
                category: typefaceData.category,
                role: typefaceRole,
                priority: idx + 1
            }
        })
        roles.push(...typefaceList)
    }
    // console.log('[LibRext CSS - TextBuilder] typefaces', typefaces)

    for (const tScaleVal of textData.typescale) {
        const newProp = {
            property: `typescale-${tScaleVal.style}`,
            value: `${tScaleVal.value}rem`,
        }
        styleVars.push(newProp)
    }

    console.log('[LibRext CSS - TextBuilder] roles', roles)
    roles.forEach(role => {
        let genericVal = role.category
        if (role.category == 'sans') {
            genericVal = 'sans-serif'
        } else if (role.category == 'display') {
            genericVal = 'serif'
        }

        const newProp = {
            property: `fontfam-${role.role}-${role.priority}`,
            value: `"${role.name}", ${genericVal}`,
        }
        styleVars.push(newProp)
    })

    const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);
    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-text.css`, variablesContent)
}

module.exports = { build: buildText };
