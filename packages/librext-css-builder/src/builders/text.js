"use strict"

import { utils } from 'librext-core'
import fileHandler from '../file-handler.js'
import cssHandler from '../css-handler.js'

const buildText = (uiSpec, outputDir, config) => {
    // console.log('[LibRext CSS - TextBuilder] uiSpec', uiSpec);
    let prefaceContent = '/* TEXT BUILDERS */\n'

    const rootCssVars = []
    let rootCssVarContent = ''
    let fontFamContent = ''
    let fontScaleContent = ''
    let docRolesContent = ''

    for (const fontRole in uiSpec.fonts) {
        const currentFontFamily = uiSpec.fonts[fontRole]
        rootCssVars.push({
            property: `${config.tokenPrefix}-fontfam-${fontRole}`,
            value: currentFontFamily,
        })
        const fontRoleVars = [
            { property: 'font-family', value: currentFontFamily, },
        ]
        const fontRoleRule = cssHandler.writeCssRule(`.${config.tokenPrefix}-fontfam-${fontRole}`, fontRoleVars);
        fontFamContent += fontRoleRule + '\n'
    }

    uiSpec.fontSizes.forEach((fontSizeVal, idx) => {
        rootCssVars.push({
            property: `${config.tokenPrefix}-typescale-${idx + 1}`,
            value: fontSizeVal,
        })
        const fontSizeVars = [
            { property: 'font-size', value: fontSizeVal, },
        ]
        const fontSizeRule = cssHandler.writeCssRule(`.${config.tokenPrefix}-typescale-${idx + 1}`, fontSizeVars);
        fontScaleContent += fontSizeRule + '\n'
    })

    for (const fontSizeRole in uiSpec.libRextData.fontSizes) {
        rootCssVars.push({
            property: `${config.tokenPrefix}-typescale-${fontSizeRole}`,
            value: uiSpec.libRextData.fontSizes[fontSizeRole],
        })
        const fontSizeVars = [
            { property: 'font-size', value: uiSpec.libRextData.fontSizes[fontSizeRole], },
        ]
        const fontSizeRule = cssHandler.writeCssRule(`.${config.tokenPrefix}-typescale-${fontSizeRole}`, fontSizeVars);
        fontScaleContent += fontSizeRule + '\n'
    }

    docRolesContent += utils.codeComment('DOCUMENT ROLES', '')

    for (const docRoleName in uiSpec.docRoles) {
        const currentDocRole = uiSpec.docRoles[docRoleName]
        const docRoleData = uiSpec.libRextData.docRoles[docRoleName]
        // console.log('[LibRext CSS - TextBuilder] currentDocRole', currentDocRole)
        // console.log('[LibRext CSS - TextBuilder] docRoleData', docRoleData)

        let weightType = currentDocRole.weight
        if (currentDocRole.weight == 'regular') {
            weightType = 'normal'
        }
        const sizeVal = `var(--${config.tokenPrefix}-typescale-${docRoleData.typescale})`

        const fontFamVal = `var(--${config.tokenPrefix}-fontfam-${currentDocRole.fontFamily})`
        const isItalic = docRoleData.styles.includes('italic')
        const fontStyleVal = isItalic ? 'italic' : 'normal'
        const weightVal = uiSpec.fontWeights[weightType]
        const letterSpacingVal = uiSpec.letterSpacings[currentDocRole.letterSpacing];
        const lineHeightVal = uiSpec.lineHeights[currentDocRole.lineHeight];
        const marginPreset = uiSpec.marginPresets[currentDocRole.lineHeight];
        const textColourRole = uiSpec.docRoleColours[docRoleName];
        const textColour = uiSpec.colors[textColourRole]

        const docRoleVars = [
            { property: 'font-weight', value: weightVal, },
            { property: 'font-size', value: sizeVal, },
            { property: 'font-family', value: fontFamVal, },
            { property: 'font-style', value: fontStyleVal, },
            { property: 'letter-spacing', value: letterSpacingVal },
            { property: 'line-height', value: lineHeightVal },
            { property: 'margin-top', value: marginPreset.marginTop },
            { property: 'margin-bottom', value: marginPreset.marginBottom },
            { property: 'color', value: textColour },
        ]

        const selectorHtml = docRoleData.html.length == 0 ? '' : `${docRoleData.html},\n`
        let docRoleSelector = `${selectorHtml}.${docRoleData.class}`

        const docRoleRule = cssHandler.writeCssRule(docRoleSelector, docRoleVars);
        const docRoleComment = utils.codeComment(docRoleName, `typescale size = ${docRoleData.typescale}`)

        docRolesContent += docRoleComment + docRoleRule + '\n'
    }

    const rootCssVarRule = cssHandler.writeCssVarRule(cssHandler.ROOT_SELECTOR, rootCssVars);
    rootCssVarContent = rootCssVarContent + rootCssVarRule + '\n'

    const allContent = prefaceContent + '\n' + rootCssVarContent + fontFamContent + fontScaleContent + docRolesContent
    fileHandler.writeFile(`${outputDir}/css/${config.filenamePrefix}-text.css`, allContent)
}

// module.exports = { build: buildText };
export default buildText