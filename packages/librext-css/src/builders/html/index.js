"use strict"

/**
 * HTML builder scripts
 * @namespace templateBuilders
 */
const build = () => {
    return {
        // htmlColours: require('./build-html-colours').build(),
        htmlShapes: require('./build-html-shapes').build(),
        htmlTypography: require('./build-html-typography').build(),
    }
}

module.exports = { build };
