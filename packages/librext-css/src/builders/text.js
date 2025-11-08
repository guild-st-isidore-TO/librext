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
    // console.log('[LibRext CSS - TextBuilder] textData', textData)

    const styleVars = []

    const typefaces = []
    const typescale = []
    const roles = []
    const docroles = []

    for (const typefaceCtg in textData.typefaces) {
        // const typefaceList = dataTypefaceList.map((typeName, idx) => {
        //     return {
        //         name: typeName,
        //         category: typefaceCtg,
        //         priority: idx + 1
        //     }
        // })
        // typefaces.push(...typefaceList)

        const currentTypefaces = textData.typefaces[typefaceCtg]
        console.log('[Text Builder] typefaceCtg', typefaceCtg)
        console.log('[Text Builder] currentTypefaces', currentTypefaces)
    }
    const getTypefaceByName = (name) => typefaces.find(tFace => tFace.name == name);

    for (const tTypescale of textData.typescale) {
        // const newProp = {
        //     property: `typescale-${tScaleVal.style}`,
        //     value: `${tScaleVal.value}rem`,
        // }
        // styleVars.push(newProp)

        const currentTypescaleItem = tTypescale
        console.log('[Text Builder] currentTypescaleItem', currentTypescaleItem)
    }

    for (const tRoles in textData.roles) {
        // const typefaceList = dataTypefaceList.map((typeName, idx) => {
        //     const typefaceData = getTypefaceByName(typeName)
        //     return {
        //         name: typeName,
        //         category: typefaceData.category,
        //         role: typefaceRole,
        //         priority: idx + 1
        //     }
        // })
        // roles.push(...typefaceList)

        const currentRole = textData.roles[tRoles]
        console.log('[Text Builder] currentRole', currentRole)
    }

    for (const tDocroles in textData.docroles) {
        // const dataTypefaceList = textData.roles[typefaceRole]
        // const typefaceList = dataTypefaceList.map((typeName, idx) => {
        //     const typefaceData = getTypefaceByName(typeName)
        //     return {
        //         name: typeName,
        //         category: typefaceData.category,
        //         role: typefaceRole,
        //         priority: idx + 1
        //     }
        // })
        // roles.push(...typefaceList)

        const currentDocRole = textData.docroles[tDocroles]
        console.log('[Text Builder] currentDocRole', currentDocRole)
    }

    // console.log('[LibRext CSS - TextBuilder] roles', roles)
    // roles.forEach(role => {
    //     let genericVal = role.category
    //     if (role.category == 'sans') {
    //         genericVal = 'sans-serif'
    //     } else if (role.category == 'display') {
    //         genericVal = 'serif'
    //     }

    //     const newProp = {
    //         property: `fontfam-${role.role}-${role.priority}`,
    //         value: `"${role.name}", ${genericVal}`,
    //     }
    //     styleVars.push(newProp)
    // })

    // const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);
    // libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-text.css`, variablesContent)
}

module.exports = { build: buildText };
