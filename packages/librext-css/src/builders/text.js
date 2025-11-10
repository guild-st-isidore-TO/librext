"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')

let scope = 'global'
const defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'
// const ROOT_SELECTOR = ':root'
const line = '------------------------------------'
const thic = '================================================'


const buildText = () => {
    let varsSelector = libRextCssUtil.ROOT_SELECTOR
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
    let typeScaleContent = ''

    const roles = []
    let rolesContent = ''

    const docroles = []
    let docRolesContent = ''

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
    // const getTypefaceByName = (name) => typefaces.find(tFace => tFace.name == name);

    const typeVars = []
    let typeScaleComment = `/* ${thic} *\\\n`
    typeScaleComment += ` * ROOT NAMESPACE\n`
    typeScaleComment += `\\* ${thic} */\n\n`

    for (const tTypescale of textData.typescale) {
        const currentTypescaleItem = tTypescale
        console.log('[Text Builder] currentTypescaleItem', currentTypescaleItem)

        typeVars.push({
            property: `typescale-${currentTypescaleItem.style}`,
            value: `${currentTypescaleItem.value}rem`,
        })
    }

    const typeRule = libRextCssUtil.writeCssVarRule(libRextCssUtil.ROOT_SELECTOR, typeVars);
    console.log('[Text Builder] typeRule', typeRule)
    typeScaleContent = typeScaleComment + typeRule + '\n'
    console.log('[Text Builder] typeScaleContent', typeScaleContent)

    for (const tRoles in textData.typeroles) {
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

        const currentRole = textData.typeroles[tRoles]
        console.log('[Text Builder] currentRole', currentRole)
    }

    let docRoleHeadingComment = `/* ${thic} *\\\n`
    docRoleHeadingComment += ` * DOCUMENT ROLES\n`
    docRoleHeadingComment += `\\* ${thic} */\n\n`
    docRolesContent += docRoleHeadingComment

    for (const currentDocRole of textData.docroles) {
        console.log('[Text Builder] currentDocRole', currentDocRole)

        let weightVal = currentDocRole.weight
        if (currentDocRole.weight == 'regular') {
            weightVal = 'normal'
        }

        const docRoleVars = [
            {
                property: 'font-weight',
                value: weightVal,
            },
        ]

        const docRoleRule = libRextCssUtil.writeCssRule(currentDocRole.html, docRoleVars);
        // const line2 = '---------------------------------'
        const docRoleComment1 = `/* ${line} *\\\n *  ${currentDocRole.docrole}\n * ${line}\n`
        const docRoleComment2 = ` *    typerole = ${currentDocRole.typerole}\n`
        const docRoleComment3 = ` *    typescale size = ${currentDocRole.typescale}\n\\* ${line} */\n`

        docRolesContent += docRoleComment1 + docRoleComment2 + docRoleComment3 + '\n' + docRoleRule + '\n'
        console.log('[Text Builder] docRoleRule', docRoleRule)
    }
    console.log('[Text Builder] docRolesContent', docRolesContent)

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

    const allContent = typeScaleContent + docRolesContent

    // const variablesContent = libRextCssUtil.writeCssVarRule(varsSelector, styleVars);
    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-text.css`, allContent)
}

module.exports = { build: buildText };
