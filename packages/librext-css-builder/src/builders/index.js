"use strict"

import baseBuilder from './base'
import textBuilder from './text'
import coloursBuilder from './colours'
import shapesBuilder from './shapes'

const defaultOutputDir = `${__dirname}/../../dist`

/**
 * CSS builder scripts
 * @namespace builders
 */
const build = (uiSpec, outputDir = defaultOutputDir) => {
    return {
        base: baseBuilder(uiSpec, outputDir),
        text: textBuilder(uiSpec, outputDir),
        colours: coloursBuilder(uiSpec, outputDir),
        shapes: shapesBuilder(uiSpec, outputDir),
    }
}

export default build
