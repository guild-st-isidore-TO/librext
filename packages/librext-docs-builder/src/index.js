"use strict"

/**
 * CSS builder scripts
 * @namespace builders
 */
const build = () => {
    return {
        base: require('./base').build(),
        text: require('./text').build(),
        colours: require('./colours').build(),
        shapes: require('./shapes').build(),
    }
}

module.exports = { build };
