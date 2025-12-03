"use strict"

const base = require('./spec-base').theme
const colours = require('./spec-colours').theme
const shapes = require('./spec-shapes').theme
const text = require('./spec-text').theme

/**
 * Librext UI Data (conforms to Theme-UI spec)
 * @namespace uiSpec
 */
const uiSpec = {
    ...text,
    ...colours,
    ...shapes,
    ...base,
}

module.exports = { uiSpec };
