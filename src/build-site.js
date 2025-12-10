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

const config = coreConfig
// const outDir = coreConfig.outDirectory
// const assetOutDir = coreConfig.assetOutDirectory

const fontsOutDir = join(projectRootDir, 'docs')
const cssOutDir = join(projectRootDir, 'docs')
const htmlOutDir = join(projectRootDir, 'docs')
const uiSpec = librextSpecBuilder(libRextUiSpec, config)

console.log('[LibRext Documentation/Specs]\nFonts output directory', fontsOutDir)
libRextFontBuilder(uiSpec, fontsOutDir, config)

console.log('[LibRext Documentation/Specs]\nCSS output directory', cssOutDir)
libRextCssBuilder(uiSpec, cssOutDir, config)

console.log('[LibRext Documentation/Specs]\nHTML output directory', htmlOutDir)
libRextSiteBuilder(uiSpec, htmlOutDir, config)
