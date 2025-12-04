"use strict"

import base from './spec-base'
import colours from './spec-colours'
import shapes from './spec-shapes'
import text from './spec-text'
import styles from './spec-styles'
import librext from './spec-librext'

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
    ...librext,
}

export default uiSpec;
