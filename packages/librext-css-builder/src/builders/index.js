"use strict"
import baseBuilder from './base.js'
import textBuilder from './text.js'
import coloursBuilder from './colours.js'
import shapesBuilder from './shapes.js'

const defaultOutputDir = ''

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
