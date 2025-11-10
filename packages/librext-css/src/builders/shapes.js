"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

const buildShapes = () => {
    let varsSelector = ':root'
    if (scope == 'local') {
        varsSelector = defaultLocalScope
    } else if (scope == 'custom') {
        varsSelector = customLocalScope
    }

    const shapeDataFile = `${libRextCssUtil.dataDir}/shapes.json`
    const shapeData = libRextCssFileHandler.readFile(shapeDataFile)
    console.log('[LibRext CSS - ShapesBuilder] shapeData', shapeData)

    const styleVars = []
    const cRadiusScale = shapeData.cornerRadiusScale
    for (const [key, value] of Object.entries(cRadiusScale)) {
        const cRadiusEntry = {
            property: `corner-radius-${key}`,
            value: `${value}px`,
        }
        styleVars.push(cRadiusEntry);
    }

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
    // // console.log('[LibRext CSS - ShapesBuilder] typefaces', typefaces)

    // for (const tScaleVal of colourData.typescale) {
    //     const newProp = {
    //         property: `typescale-${tScaleVal.style}`,
    //         value: `${tScaleVal.value}rem`,
    //     }
    //     styleVars.push(newProp)
    // }

    // console.log('[LibRext CSS - ShapesBuilder] roles', roles)
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
    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-shapes.css`, variablesContent)
}

module.exports = { build: buildShapes };
