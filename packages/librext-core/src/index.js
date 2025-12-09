/**
 * @file LibRext Core
 */
"use strict"

import coreConfig from "./core-config"

/**
 * Custom Librext UI Data (doesn't conform to Theme-UI spec)
 * @namespace libRextCore
 */
const buildLibRextCore = () => {
    const outCore = {
        config: coreConfig,
    }
    return outCore
}

const libRextCore = buildLibRextCore()
const {
    config
} = libRextCore

export default libRextCore;
export {
    config,
}