/**
 * @file Builds HTML For the LibRext Documentation/Specs page
 */

import { join } from 'path'
import libRextCssBuilder from 'librext-css-builder'
import libRextUiSpec from 'librext-ui-spec'
import librextSpecBuilder from 'librext-spec-builder'
import { config as coreConfig } from 'librext-core'
import libRextDocsBuilder from './builders/index.js'
import { projectRootDir } from './docs-builder-util.js'

const uiSpec = librextSpecBuilder(libRextUiSpec, config)

const config = coreConfig
const outDir = coreConfig.outDirectory
const assetOutDir = coreConfig.assetOutDirectory
const cssOutDir = join(projectRootDir, assetOutDir)
const htmlOutDir = join(projectRootDir, outDir)

console.log('[LibRext Docs Builder] LibRext Documentation/Specs\nCSS output directory', cssOutDir)
libRextCssBuilder(uiSpec, cssOutDir, config)

console.log('[LibRext Docs Builder] LibRext Documentation/Specs\nHTML output directory', htmlOutDir)
libRextDocsBuilder(uiSpec, htmlOutDir, config)
