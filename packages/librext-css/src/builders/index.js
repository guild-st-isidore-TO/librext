"use strict"

/**
 * CSS builder scripts
 * @namespace builders
 */
const build = () => {
    return {
        // base: require('./base').build(),
        // colours: require('./colours').build(),
        // layout: require('./layout').build(),
        // shapes: require('./shapes').build(),
        // spacing: require('./spacing').build(),
        // surfaces: require('./surfaces').build(),
        text: require('./text').build(),
    }
}

module.exports = { build };
