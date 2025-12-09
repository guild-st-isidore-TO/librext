"use strict"

import coreConfig from "./core-config"

/**
 * Custom Librext UI Data (doesn't conform to Theme-UI spec)
 * @namespace libRextCore
 */
const libRextCore = () => {
    const outCore = {
        config: coreConfig,
    }
    return outCore
}

export default libRextCore;
