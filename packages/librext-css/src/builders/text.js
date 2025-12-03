"use strict"

const libRextCssFileHandler = require('./file-handler')
const libRextCssUtil = require('./utils')
const { uiSpec } = require(libRextCssUtil.dataUiSpecDir)

const line = '------------------------------------'
const boldLine = '===================================='
const thickLine = '================================================'


const buildText = () => {
    // console.log('[LibRext CSS - TextBuilder] uiSpec', uiSpec);
    let prefaceContent = '/* TEXT BUILDERS */\n'

    const rootCssVars = []
    let rootCssVarContent = ''

    let docRolesContent = ''

    let typeScaleComment = `/* ${thickLine} *\\\n`
    typeScaleComment += ` * ROOT NAMESPACE\n`
    typeScaleComment += `\\* ${thickLine} */\n\n`

    for (const fontRole in uiSpec.fonts) {
        const currentFontFamily = uiSpec.fonts[fontRole]
        rootCssVars.push({
            property: `fontfam-${fontRole}`,
            value: currentFontFamily,
        })
    }

    uiSpec.fontSizes.forEach((fontSizeVal, idx) => {
        rootCssVars.push({
            property: `typescale-${idx + 1}`,
            value: fontSizeVal,
        })
    })

    for (const fontSizeRole in uiSpec.libRextData.fontSizes) {
        rootCssVars.push({
            property: `typescale-${fontSizeRole}`,
            value: uiSpec.libRextData.fontSizes[fontSizeRole],
        })
    }

    let docRoleHeadingComment = `/* ${thickLine} *\\\n`
    docRoleHeadingComment += ` * DOCUMENT ROLES\n`
    docRoleHeadingComment += `\\* ${thickLine} */\n\n`
    docRolesContent += docRoleHeadingComment

    for (const docRoleName in uiSpec.docRoles) {
        const currentDocRole = uiSpec.docRoles[docRoleName]
        let weightVal = currentDocRole.weight
        if (currentDocRole.weight == 'regular') {
            weightVal = 'normal'
        }
        const sizeVal = `var(--typescale-${currentDocRole.libRextData.typescale})`

        const fontFamVal = `var(--fontfam-${currentDocRole.fontFamily})`
        const isItalic = currentDocRole.libRextData.styles.includes('italic')
        const fontStyleVal = isItalic ? 'italic' : 'normal'

        const docRoleVars = [
            { property: 'font-weight', value: weightVal, },
            { property: 'font-size', value: sizeVal, },
            { property: 'font-family', value: fontFamVal, },
            { property: 'font-style', value: fontStyleVal, },
        ]

        const selectorHtml = currentDocRole.libRextData.html.length == 0 ? '' : `${currentDocRole.libRextData.html},\n`
        let docRoleSelector = `${selectorHtml}.${currentDocRole.libRextData.class}`

        const docRoleRule = libRextCssUtil.writeCssRule(docRoleSelector, docRoleVars);
        const docRoleComment1 = `/* ${boldLine} *\\\n *  ${currentDocRole.libRextData.name}\n * ${line}\n`
        const docRoleComment3 = ` *    typescale size = ${currentDocRole.libRextData.typescale}\n\\* ${line} */\n`

        docRolesContent += docRoleComment1 + docRoleComment3 + docRoleRule + '\n'
    }

    const rootCssVarRule = libRextCssUtil.writeCssVarRule(libRextCssUtil.ROOT_SELECTOR, rootCssVars);
    rootCssVarContent = rootCssVarContent + rootCssVarRule + '\n'

    const allContent = prefaceContent + '\n' + rootCssVarContent + docRolesContent
    libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-text.css`, allContent)
}

module.exports = { build: buildText };
