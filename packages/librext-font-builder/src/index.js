/**
 * @file LibRext Font Builder
 */
"use strict"

import { join } from 'path'
import { config } from 'librext-core'
import { projectRootDir } from './font-builder-util'

/**
 * Font builder scripts
 * @namespace libRextFontBuilder
 */

const defaultOutputDir = join(projectRootDir, config.assetOutDirectory)

/**
 * 
 * @param {*} uiSpec 
 * @param {*} outputDir 
 * @param {*} config 
 * @returns true if everything succeeded, false if not
 */
const build = (uiSpec, outputDir = defaultOutputDir, config) => {
    const buildSuccess = false

    // actual implementation

    return buildSuccess
}

export default build
