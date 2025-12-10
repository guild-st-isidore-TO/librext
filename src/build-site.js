/**
 * @file Builds HTML For the LibRext Documentation/Specs page
 */

import { join } from 'path'

import { config as coreConfig } from 'librext-core'
import libRextUiSpec from 'librext-ui-spec'
import librextSpecBuilder from 'librext-spec-builder'
import libRextCssBuilder from 'librext-css-builder'
import libRextDocsBuilder from 'librext-docs-builder'

import { projectRootDir } from './builder-util.js'

const config = coreConfig
// const outDir = coreConfig.outDirectory
// const assetOutDir = coreConfig.assetOutDirectory

const cssOutDir = join(projectRootDir, 'docs')
const htmlOutDir = join(projectRootDir, 'docs')
const uiSpec = librextSpecBuilder(libRextUiSpec, config)

console.log('[LibRext Documentation/Specs]\nCSS output directory', cssOutDir)
libRextCssBuilder(uiSpec, cssOutDir, config)

console.log('[LibRext Documentation/Specs]\nHTML output directory', htmlOutDir)
libRextDocsBuilder(uiSpec, htmlOutDir, config)
