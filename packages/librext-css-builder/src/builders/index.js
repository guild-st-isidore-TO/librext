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
const build = (outputDir = defaultOutputDir) => {
    return {
        base: baseBuilder(outputDir),
        text: textBuilder(outputDir),
        colours: coloursBuilder(outputDir),
        shapes: shapesBuilder(outputDir),
    }
}

export default build
