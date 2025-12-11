/**
 * @file Builds HTML For the LibRext Documentation/Specs page
 */

import { join } from 'path'

import { config as coreConfig } from 'librext-core'
import libRextUiSpec from 'librext-ui-spec'
import librextSpecBuilder from 'librext-spec-builder'
import libRextFontBuilder from 'librext-font-builder'
import libRextCssBuilder from 'librext-css-builder'
import libRextSiteBuilder from 'librext-site'

import { projectRootDir } from './builder-util.js'

const variants = [
    'librext',
    'sw',
    'gsi',
    'inc',
]
const defaultVariant = variants[0]

let styleVariant = process.env.npm_config_variant ? process.env.npm_config_variant : defaultVariant
if (!variants.includes(styleVariant)) {
    styleVariant = defaultVariantz
}

let outConfig = { ...coreConfig }

if (styleVariant == 'sw') {
    console.log('[LibRext Docs Builder] using SW fonts')
    outConfig.fonts.body = 'open-sans'
    outConfig.fonts.bodyAlt = 'crimson-text'
    outConfig.fonts.heading = 'aleo'
    outConfig.fonts.headingAlt = 'yrsa'
    outConfig.fonts.display = 'yrsa'

    outConfig.themeColours = {
        nightBlue: '#030D4F',
        deepOrange: '#EE4603',
        coolBlue: '#061999',
        brightOrange: '#FC8352',
        goldYellow: '#FDC95C',
    }
}

const fontsOutDir = join(projectRootDir, 'docs/style')
const cssOutDir = join(projectRootDir, 'docs/style')
const htmlOutDir = join(projectRootDir, 'docs/style')

const uiSpec = librextSpecBuilder(libRextUiSpec, outConfig)
let outSpec = {
    ...uiSpec,
}
console.log('[LibRext Docs Builder] outSpec', outSpec)

if (styleVariant == 'sw') {
    console.log('[LibRext Docs Builder] using SW styles')

    outSpec.colors.modes.dark.background = '#030D4F'

    outSpec.colors.primary = '#EE4603'
    outSpec.colors.secondary = '#061999'
    outSpec.colors.tertiary = '#FC8352'

    outSpec.colors.modes.dark.primary = '#FDC95C'
    outSpec.colors.modes.dark.secondary = '#FC8352'
    outSpec.colors.modes.dark.tertiary = '#061999'
} else if (styleVariant == 'gsi') {
    console.log('[LibRext Docs Builder] using GSI styles')

    outSpec.colors.primary = '#B81626'
    outSpec.colors.secondary = '#FCDD09'
    outSpec.colors.tertiary = '#322928'

    outSpec.colors.modes.dark.primary = '#B81626'
    outSpec.colors.modes.dark.secondary = '#FCDD09'
    outSpec.colors.modes.dark.tertiary = '#322928'
} else if (styleVariant == 'inc') {
    console.log('[LibRext Docs Builder] using INC styles')

    outSpec.colors.primary = '#B81626'
    outSpec.colors.secondary = '#FCDD09'
    outSpec.colors.tertiary = '#322928'

    outSpec.colors.modes.dark.primary = '#B81626'
    outSpec.colors.modes.dark.secondary = '#FCDD09'
    outSpec.colors.modes.dark.tertiary = '#322928'
} else {
    console.log('[LibRext Docs Builder] using default styles')
}

console.log('[LibRext Documentation/Specs]\nFonts output directory', fontsOutDir)
libRextFontBuilder(outSpec, fontsOutDir, outConfig)

console.log('[LibRext Documentation/Specs]\nCSS output directory', cssOutDir)
libRextCssBuilder(outSpec, cssOutDir, outConfig)

console.log('[LibRext Documentation/Specs]\nHTML output directory', htmlOutDir)
libRextSiteBuilder(outSpec, htmlOutDir, outConfig)
