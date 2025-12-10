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

let config = coreConfig
let configOverrides = {}

if (styleVariant == 'sw') {
    console.log('[LibRext Docs Builder] using SW styles')
    configOverrides.fonts = config.fonts
} else if (styleVariant == 'gsi') {
    console.log('[LibRext Docs Builder] using GSI styles')
    configOverrides.fonts = config.fonts
} else if (styleVariant == 'inc') {
    console.log('[LibRext Docs Builder] using INC styles')
    configOverrides.fonts = config.fonts
} else {
    console.log('[LibRext Docs Builder] using default styles')
}

const outConfig = {
    ...config,
    ...configOverrides,
}

const fontsOutDir = join(projectRootDir, 'docs')
const cssOutDir = join(projectRootDir, 'docs')
const htmlOutDir = join(projectRootDir, 'docs')

const uiSpec = librextSpecBuilder(libRextUiSpec, outConfig)

console.log('[LibRext Documentation/Specs]\nFonts output directory', fontsOutDir)
libRextFontBuilder(uiSpec, fontsOutDir, outConfig)

console.log('[LibRext Documentation/Specs]\nCSS output directory', cssOutDir)
libRextCssBuilder(uiSpec, cssOutDir, outConfig)

console.log('[LibRext Documentation/Specs]\nHTML output directory', htmlOutDir)
libRextSiteBuilder(uiSpec, htmlOutDir, outConfig)
