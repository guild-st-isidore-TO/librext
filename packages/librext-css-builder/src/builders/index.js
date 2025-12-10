/**
 * @file LibRext CSS Builder
 */
"use strict"

import { join } from 'path'
import { config } from 'librext-core'
import { projectRootDir } from '../css-builder-util.js'
import baseBuilder from './base.js'
import textBuilder from './text.js'
import coloursBuilder from './colours.js'
import shapesBuilder from './shapes.js'

/**
 * CSS builder scripts
 * @namespace libRextCssBuilder
 */

const defaultOutputDir = join(projectRootDir, config.assetOutDirectory)

const build = (uiSpec, outputDir = defaultOutputDir, config) => {
    return {
        base: baseBuilder(uiSpec, outputDir, config),
        text: textBuilder(uiSpec, outputDir, config),
        colours: coloursBuilder(uiSpec, outputDir, config),
        shapes: shapesBuilder(uiSpec, outputDir, config),
    }
}

export default build
