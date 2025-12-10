/**
 * @file LibRext Font Builder
 */
"use strict"

import { join } from 'path'
import { cpSync } from 'fs';

import { config } from 'librext-core'
import { projectRootDir, fontDir } from './font-builder-util.js'
import libRextFontsData from './data/librext-fonts.json' with { type: 'json' };

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
    const targetDir = join(outputDir, 'fonts')

    config.fonts.forEach((fontKey, idx) => {
        if (!libRextFontsData.availableFonts.includes(fontKey)) {
            // Current fontKey is not in the system. Skip this.
            console.warn(`[Font Builder] Font key "${fontKey}" not recognized.`)
            return
        }
        const fontSourceDir = join(fontDir, fontKey)
        const fontTargetDir = join(targetDir, fontKey)
        try {
            cpSync(fontSourceDir, fontTargetDir, { recursive: true })
        } catch (err) {
            console.error('[Font Builder] Font copying failed!')
            console.error(err)
            return false;
        }
    })

    return buildSuccess
}

export default build
