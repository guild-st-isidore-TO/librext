/**
 * @file LibRext Core
 */
"use strict"

import coreConfig from "./core-config.js"
import coreUtils from "./core-utils.js"

/**
 * Custom Librext UI Data (doesn't conform to Theme-UI spec)
 * @namespace libRextCore
 */
const buildLibRextCore = () => {
    const outCore = {
        config: coreConfig,
        utils: coreUtils,
    }
    return outCore
}

const libRextCore = buildLibRextCore()
const {
    config,
    utils,
} = libRextCore

export default libRextCore;
export {
    config,
    utils,
}