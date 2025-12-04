"use strict"

import { theme as base } from './spec-base'
import { theme as colours } from './spec-colours'
import { theme as shapes } from './spec-shapes'
import { theme as text } from './spec-text'
import { theme as styles } from './spec-styles'
import { theme as librext } from './spec-librext'

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
