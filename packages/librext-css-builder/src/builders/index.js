"use strict"

import baseBuilder from './base'
import textBuilder from './text'
import coloursBuilder from './colours'
import shapesBuilder from './shapes'

/**
 * CSS builder scripts
 * @namespace builders
 */
const build = () => {
    return {
        base: baseBuilder(),
        text: textBuilder(),
        colours: coloursBuilder(),
        shapes: shapesBuilder(),
    }
}

export default build
