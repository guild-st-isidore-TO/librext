"use strict"

import librext from './spec-librext'

/**
 * Custom Librext UI Data (doesn't conform to Theme-UI spec)
 * @namespace buildSpec
 */
const buildSpec = (uiSpec) => {
    const outSpec = {
        ...uiSpec,
        ...librext,
    }
    return outSpec
}

export default buildSpec;
