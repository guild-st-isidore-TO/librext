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
const build = (outputDir = defaultOutputDir, uiSpec) => {
    return {
        base: baseBuilder(outputDir, uiSpec),
        text: textBuilder(outputDir, uiSpec),
        colours: coloursBuilder(outputDir, uiSpec),
        shapes: shapesBuilder(outputDir, uiSpec),
    }
}

export default build
