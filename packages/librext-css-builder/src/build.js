/**
 * @file Builds CSS For the LibRext Documentation/Specs page
 */

import { join } from 'path'
import libRextUiSpec from 'librext-ui-spec'
import librextSpecBuilder from 'librext-spec-builder'
import { config as coreConfig } from 'librext-core'
import libRextCssBuilder from './builders/index.js'
import { projectRootDir } from './css-builder-util.js'

const config = coreConfig
const assetOutDir = coreConfig.assetOutDirectory
const cssOutDir = join(projectRootDir, assetOutDir, 'css')

const uiSpec = librextSpecBuilder(libRextUiSpec, config)

console.log('[LibRext CSS Builder] LibRext Documentation/Specs\nCSS output directory', cssOutDir)
libRextCssBuilder(uiSpec, cssOutDir, config)