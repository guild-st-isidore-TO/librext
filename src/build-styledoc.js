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
let specOverrides = {
    colors: {
        modes: {
            dark: {}
        }
    }
}

if (styleVariant == 'sw') {
    console.log('[LibRext Docs Builder] using SW styles')

    configOverrides = {
        fonts: {
            body: 'open-sans',
            bodyAlt: 'crimson-text',
            heading: 'aleo',
            headingAlt: 'yrsa',
            display: 'yrsa',
        }
    }

    specOverrides = {
        primary: '#EE4603',
        secondary: '#061999',
        tertiary: '#FC8352',
        colors: {
            modes: {
                dark: {
                    background: '#030D4F',
                    primary: '#FDC95C',
                    secondary: '#FC8352',
                    tertiary: '#061999',
                }
            }
        }
    }
} else if (styleVariant == 'gsi') {
    console.log('[LibRext Docs Builder] using GSI styles')

    specOverrides = {
        primary: '#B81626',
        secondary: '#FCDD09',
        tertiary: '#322928',
        colors: {
            modes: {
                dark: {
                    primary: '#B81626',
                    secondary: '#FCDD09',
                    tertiary: '#322928',
                }
            }
        }
    }

} else if (styleVariant == 'inc') {
    console.log('[LibRext Docs Builder] using INC styles')

    specOverrides = {
        primary: '#EE4603',
        secondary: '#061999',
        tertiary: '#FC8352',
        colors: {
            modes: {
                dark: {
                    background: '#030D4F',
                    primary: '#FDC95C',
                    secondary: '#FC8352',
                    tertiary: '#061999',
                }
            }
        }
    }
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
const outSpec = {
    ...uiSpec,
    ...specOverrides,
}

console.log('[LibRext Documentation/Specs]\nFonts output directory', fontsOutDir)
libRextFontBuilder(outSpec, fontsOutDir, outConfig)

console.log('[LibRext Documentation/Specs]\nCSS output directory', cssOutDir)
libRextCssBuilder(outSpec, cssOutDir, outConfig)

console.log('[LibRext Documentation/Specs]\nHTML output directory', htmlOutDir)
libRextSiteBuilder(outSpec, htmlOutDir, outConfig)
