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

    const colourDataFile = `${libRextCssUtil.dataDir}/colours.json`
    const colourData = libRextCssFileHandler.readFile(colourDataFile)
    console.log('[LibRext CSS - ColourBuilder] colourData', colourData)

    const styleVars = []

    const greyPalette = colourData.palette.greyscale
    for (const [key, value] of Object.entries(greyPalette)) {
        const greyEntry = {
            property: `grey-${key}`,
            value,
        }
        styleVars.push(greyEntry);
    }

    const themePalette = colourData.palette.theme
    for (const [key, value] of Object.entries(themePalette)) {
        const themeEntry = {
            property: `theme-${key}`,
            value,
        }
        styleVars.push(themeEntry);
    }


    // const typefaces = []
    // const roles = []
    // const typescale = []

    // for (const typefaceCtg in colourData.typefaces) {
    //     const dataTypefaceList = colourData.typefaces[typefaceCtg]
    //     const typefaceList = dataTypefaceList.map((typeName, idx) => {
    //         return {
    //             name: typeName,
    //             category: typefaceCtg,
    //             priority: idx + 1
    //         }
    //     })
    //     typefaces.push(...typefaceList)
    // }
    // const getTypefaceByName = (name) => typefaces.find(tFace => tFace.name == name);

    // for (const typefaceRole in colourData.roles) {
    //     const dataTypefaceList = colourData.roles[typefaceRole]
    //     const typefaceList = dataTypefaceList.map((typeName, idx) => {
    //         const typefaceData = getTypefaceByName(typeName)
    //         return {
    //             name: typeName,
    //             category: typefaceData.category,
    //             role: typefaceRole,
    //             priority: idx + 1
    //         }
    //     })
    //     roles.push(...typefaceList)
    // }
    // // console.log('[LibRext CSS - ColourBuilder] typefaces', typefaces)

    // for (const tScaleVal of colourData.typescale) {
    //     const newProp = {
    //         property: `typescale-${tScaleVal.style}`,
    //         value: `${tScaleVal.value}rem`,
    //     }
    //     styleVars.push(newProp)
    // }

    // console.log('[LibRext CSS - ColourBuilder] roles', roles)
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

    console.log(styleVars)

    const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);
    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-colours.css`, variablesContent)
}

module.exports = { build: buildText };
