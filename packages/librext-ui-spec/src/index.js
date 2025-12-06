"use strict"

import base from './spec-base.js'
import colours from './spec-colours.js'
import shapes from './spec-shapes.js'
import text from './spec-text.js'
import styles from './spec-styles.js'

/**
 * Librext UI Data (conforms to Theme-UI spec)
 * @namespace uiSpec
 */
const uiSpec = {
    ...base,
    ...text,
    ...colours,
    ...shapes,
    ...styles,
}

export default uiSpec;
