"use strict"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import baseBuilder from './base.js'
import textBuilder from './text.js'
import coloursBuilder from './colours.js'
import shapesBuilder from './shapes.js'

const defaultOutputDir = `${__dirname}/../../dist`

/**
 * CSS builder scripts
 * @namespace builders
 */
const build = (uiSpec, outputDir = defaultOutputDir, config) => {
    return {
        base: baseBuilder(uiSpec, outputDir, config),
        text: textBuilder(uiSpec, outputDir, config),
        colours: coloursBuilder(uiSpec, outputDir, config),
        shapes: shapesBuilder(uiSpec, outputDir, config),
    }
}

export default build
