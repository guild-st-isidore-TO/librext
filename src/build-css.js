/**
 * @file Builds CSS For the LibRext Documentation/Specs page
 */

import { join } from 'path'

import { config as coreConfig } from 'librext-core'
import libRextUiSpec from 'librext-ui-spec'
import librextSpecBuilder from 'librext-spec-builder'
import libRextCssBuilder from 'librext-css-builder'

import { projectRootDir } from './builder-util.js'

const config = coreConfig
const assetOutDir = coreConfig.assetOutDirectory
const cssOutDir = join(projectRootDir, assetOutDir)

const uiSpec = librextSpecBuilder(libRextUiSpec, config)

console.log('[LibRext Documentation/Specs]\nCSS output directory', cssOutDir)
libRextCssBuilder(uiSpec, cssOutDir, config)