"use strict"

const base = require('./base').theme
const colours = require('./colours').theme
const shapes = require('./shapes').theme
const text = require('./text').theme

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
