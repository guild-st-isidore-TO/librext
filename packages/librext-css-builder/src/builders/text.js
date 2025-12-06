"use strict"

import libRextCssFileHandler from './file-handler.js'
import libRextCssUtil from './utils.js'

const line = '------------------------------------'
const boldLine = '===================================='
const thickLine = '================================================'


const buildText = (uiSpec, outputDir) => {
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
        const docRoleData = uiSpec.libRextData.docRoles[docRoleName]
        // console.log('[LibRext CSS - TextBuilder] currentDocRole', currentDocRole)
        // console.log('[LibRext CSS - TextBuilder] docRoleData', docRoleData)

        let weightType = currentDocRole.weight
        if (currentDocRole.weight == 'regular') {
            weightType = 'normal'
        }
        const sizeVal = `var(--typescale-${docRoleData.typescale})`

        const fontFamVal = `var(--fontfam-${currentDocRole.fontFamily})`
        const isItalic = docRoleData.styles.includes('italic')
        const fontStyleVal = isItalic ? 'italic' : 'normal'
        const weightVal = uiSpec.fontWeights[weightType]
        const letterSpacingVal = uiSpec.letterSpacings[currentDocRole.letterSpacing];
        const lineHeightVal = uiSpec.lineHeights[currentDocRole.lineHeight];
        const marginPreset = uiSpec.marginPresets[currentDocRole.lineHeight];

        const docRoleVars = [
            { property: 'font-weight', value: weightVal, },
            { property: 'font-size', value: sizeVal, },
            { property: 'font-family', value: fontFamVal, },
            { property: 'font-style', value: fontStyleVal, },
            { property: 'letter-spacing', value: letterSpacingVal },
            { property: 'line-height', value: lineHeightVal },
            { property: 'margin-top', value: marginPreset.marginTop },
            { property: 'margin-bottom', value: marginPreset.marginBottom },
        ]

        const selectorHtml = docRoleData.html.length == 0 ? '' : `${docRoleData.html},\n`
        let docRoleSelector = `${selectorHtml}.${docRoleData.class}`

        const docRoleRule = libRextCssUtil.writeCssRule(docRoleSelector, docRoleVars);
        const docRoleComment1 = `/* ${boldLine} *\\\n *  ${docRoleName}\n * ${line}\n`
        const docRoleComment3 = ` *    typescale size = ${docRoleData.typescale}\n\\* ${line} */\n`

        docRolesContent += docRoleComment1 + docRoleComment3 + docRoleRule + '\n'
    }

    const rootCssVarRule = libRextCssUtil.writeCssVarRule(libRextCssUtil.ROOT_SELECTOR, rootCssVars);
    rootCssVarContent = rootCssVarContent + rootCssVarRule + '\n'

    const allContent = prefaceContent + '\n' + rootCssVarContent + docRolesContent
    libRextCssFileHandler.writeFile(`${outputDir}/css/librext-text.css`, allContent)
}

// module.exports = { build: buildText };
export default buildText