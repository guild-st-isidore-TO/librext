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

    // let prefaceContent = '@import "../fonts/librext-fonts.css";\n'
    let prefaceContent = '/* TEXT BUILDERS */\n'

    const styleVars = []

    const typefaces = textData.definitions.typefaces
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

    const rootCssVars = []
    let rootCssVarContent = ''

    const typescale = []

    const typeRoles = {}
    let rolesContent = ''

    const docroles = []
    let docRolesContent = ''

    // console.log('[Text Builder] typefaces', typefaces)
    // const getTypefaceByName = (name) => typefaces.find(tFace => tFace.name == name);

    let typeScaleComment = `/* ${thickLine} *\\\n`
    typeScaleComment += ` * ROOT NAMESPACE\n`
    typeScaleComment += `\\* ${thickLine} */\n\n`


    for (const tCateg in typefaces) {
        // const currentRoleTypeface = getTypeface(typeKey)

        typefaces[tCateg].forEach((fontFam, idx) => {
            let fontFamCtg = tCateg
            const defaultFonts = textData.definitions.typefaceDefaults[tCateg]
            const defaultFontsFormatted = defaultFonts.map(dFont => {
                const numTokens = dFont.split(' ').length
                if (numTokens > 1) {
                    return `"${dFont}"`
                }
                return dFont
            }).join(', ')
            if (tCateg == 'sans') {
                fontFamCtg = 'sans-serif'
            }
            const fontFamVal = `"${fontFam}", ${defaultFontsFormatted}, ${fontFamCtg}`
            rootCssVars.push({
                property: `fontfam-${tCateg}-${idx + 1}`,
                value: fontFamVal,
            })
        })
    }

    for (const tTypescale of textData.definitions.typescale) {
        const currentTypescaleItem = tTypescale
        // console.log('[Text Builder] currentTypescaleItem', currentTypescaleItem)

        rootCssVars.push({
            property: `typescale-${currentTypescaleItem.index}`,
            value: `${currentTypescaleItem.value}rem`,
        })
        rootCssVars.push({
            property: `typescale-${currentTypescaleItem.style}`,
            value: `${currentTypescaleItem.value}rem`,
        })
    }

    for (const tRole in textData.variables.typeroles) {
        const currentRoleTypefaceKeys = textData.variables.typeroles[tRole]
        // console.log('[Text Builder] currentRole', tRole, currentRoleTypefaceKeys)

        const currentRoleTypefaces = currentRoleTypefaceKeys.map((typeKey, idx) => {
            const currentRoleTypeface = getTypeface(typeKey)
            const fontFamVal = `var(--fontfam-${currentRoleTypeface.category}-${typeKey.split('.')[1]})`

            rootCssVars.push({
                property: `fontfam-${tRole}-${idx + 1}`,
                value: fontFamVal,
            })

            return currentRoleTypeface
        })

        typeRoles[tRole] = currentRoleTypefaces

    }
    // console.log('[Text Builder] typeRoles', typeRoles)

    let docRoleHeadingComment = `/* ${thickLine} *\\\n`
    docRoleHeadingComment += ` * DOCUMENT ROLES\n`
    docRoleHeadingComment += `\\* ${thickLine} */\n\n`
    docRolesContent += docRoleHeadingComment




    for (const currentDocRole of textData.variables.docroles) {
        // console.log('[Text Builder] currentDocRole', currentDocRole)

        let weightVal = currentDocRole.weight
        if (currentDocRole.weight == 'regular') {
            weightVal = 'normal'
        }
        // const sizeVal = textData.typescale.find(tScaleItem => {
        //     return tScaleItem.style == currentDocRole.typescale
        // })
        const sizeVal = `var(--typescale-${currentDocRole.typescale})`

        const fFamParts = currentDocRole.typerole.split('.')
        const fFamCtg = fFamParts[0]
        const fFamPrio = fFamParts[1]

        const fontFamVal = `var(--fontfam-${fFamCtg}-${fFamPrio})`
        const isItalic = currentDocRole.styles.includes('italic')
        const fontStyleVal = isItalic ? 'italic' : 'normal'

        const docRoleVars = [
            { property: 'font-weight', value: weightVal, },
            { property: 'font-size', value: sizeVal, },
            { property: 'font-family', value: fontFamVal, },
            { property: 'font-style', value: fontStyleVal, },
        ]

        const docRoleRule = libRextCssUtil.writeCssRule(currentDocRole.html, docRoleVars);
        const docRoleComment1 = `/* ${boldLine} *\\\n *  ${currentDocRole.docrole}\n * ${line}\n`
        const docRoleComment2 = ` *    typerole = ${currentDocRole.typerole}\n`
        const docRoleComment3 = ` *    typescale size = ${currentDocRole.typescale}\n\\* ${line} */\n`

        docRolesContent += docRoleComment1 + docRoleComment2 + docRoleComment3 + docRoleRule + '\n'
        // console.log('[Text Builder] docRoleRule', docRoleRule)
    }
    // console.log('[Text Builder] docRolesContent', docRolesContent)

    const rootCssVarRule = libRextCssUtil.writeCssVarRule(libRextCssUtil.ROOT_SELECTOR, rootCssVars);
    rootCssVarContent = rootCssVarContent + rootCssVarRule + '\n'

    const allContent = prefaceContent + '\n' + rootCssVarContent + docRolesContent
    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-text.css`, allContent)
}

module.exports = { build: buildText };
