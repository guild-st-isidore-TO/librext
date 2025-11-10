"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')

const line = '------------------------------------'
const boldLine = '===================================='
const thickLine = '================================================'


const buildText = () => {
    const textDataFile = `${libRextCssUtil.dataDir}/text.json`
    const textData = libRextCssFileHandler.readFile(textDataFile)
    // console.log('[LibRext CSS - TextBuilder] textData', textData)

    const styleVars = []

    const typefaces = textData.typefaces
    const getTypeface = (typefaceId) => {
        let tFace;

        try {
            const typeParts = typefaceId.split('.')
            const typeCtg = typeParts[0]
            const typePrio = typeParts[1]
            const typeIdx = Number.parseInt(typePrio) - 1

            tFace = {
                name: typefaces[typeCtg][typeIdx],
                category: typeCtg,
            }
        } catch (error) {
            console.log('[Text Builder] Failed to get typeface.')
            console.log(error);
        }

        return tFace
    }

    const typescale = []
    let typeScaleContent = ''

    const typeRoles = {}
    let rolesContent = ''

    const docroles = []
    let docRolesContent = ''




    // for (const typefaceCtg in textData.typefaces) {
    //     const currentTypefaces = textData.typefaces[typefaceCtg]
    //     console.log('[Text Builder] typefaceCtg', typefaceCtg)
    //     console.log('[Text Builder] currentTypefaces', currentTypefaces)
    // }
    console.log('[Text Builder] typefaces', typefaces)
    // const getTypefaceByName = (name) => typefaces.find(tFace => tFace.name == name);

    const typeVars = []
    let typeScaleComment = `/* ${thickLine} *\\\n`
    typeScaleComment += ` * ROOT NAMESPACE\n`
    typeScaleComment += `\\* ${thickLine} */\n\n`




    for (const tTypescale of textData.typescale) {
        const currentTypescaleItem = tTypescale
        // console.log('[Text Builder] currentTypescaleItem', currentTypescaleItem)

        typeVars.push({
            property: `typescale-${currentTypescaleItem.style}`,
            value: `${currentTypescaleItem.value}rem`,
        })
    }

    const typeRule = libRextCssUtil.writeCssVarRule(libRextCssUtil.ROOT_SELECTOR, typeVars);
    // console.log('[Text Builder] typeRule', typeRule)
    typeScaleContent = typeScaleComment + typeRule + '\n'
    // console.log('[Text Builder] typeScaleContent', typeScaleContent)




    for (const tRole in textData.typeroles) {
        const currentRoleTypefaceKeys = textData.typeroles[tRole]
        // console.log('[Text Builder] currentRole', tRole, currentRoleTypefaceKeys)

        const currentRoleTypefaces = currentRoleTypefaceKeys.map(typeKey => {
            return getTypeface(typeKey)
        })
        
        typeRoles[tRole] = currentRoleTypefaces
    }
    console.log('[Text Builder] typeRoles', typeRoles)

    let docRoleHeadingComment = `/* ${thickLine} *\\\n`
    docRoleHeadingComment += ` * DOCUMENT ROLES\n`
    docRoleHeadingComment += `\\* ${thickLine} */\n\n`
    docRolesContent += docRoleHeadingComment




    for (const currentDocRole of textData.docroles) {
        // console.log('[Text Builder] currentDocRole', currentDocRole)

        let weightVal = currentDocRole.weight
        if (currentDocRole.weight == 'regular') {
            weightVal = 'normal'
        }
        const sizeVal = textData.typescale.find(tScaleItem => {
            return tScaleItem.style == currentDocRole.typescale
        })

        const docRoleVars = [
            { property: 'font-weight', value: weightVal, },
            { property: 'font-size', value: `${sizeVal.value}rem`, },
        ]

        const docRoleRule = libRextCssUtil.writeCssRule(currentDocRole.html, docRoleVars);
        const docRoleComment1 = `/* ${boldLine} *\\\n *  ${currentDocRole.docrole}\n * ${line}\n`
        const docRoleComment2 = ` *    typerole = ${currentDocRole.typerole}\n`
        const docRoleComment3 = ` *    typescale size = ${currentDocRole.typescale}\n\\* ${line} */\n`

        docRolesContent += docRoleComment1 + docRoleComment2 + docRoleComment3 + docRoleRule + '\n'
        // console.log('[Text Builder] docRoleRule', docRoleRule)
    }
    // console.log('[Text Builder] docRolesContent', docRolesContent)


    const allContent = typeScaleContent + docRolesContent
    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-text.css`, allContent)
}

module.exports = { build: buildText };
