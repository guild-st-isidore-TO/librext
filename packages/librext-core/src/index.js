/**
 * @file LibRext Core
 */
"use strict"

import coreConfig from "./core-config.js"
import coreUtils from "./core-utils.js"
import coreFileHandler from "./core-file-handler.js"

/**
 * Functions, constants, and configuration used by several packages throughout the system.
 * @namespace libRextCore
 */
const buildLibRextCore = () => {
    const outCore = {
        config: coreConfig,
        utils: coreUtils,
        fileHandler: coreFileHandler,
    }
    return outCore
}

const libRextCore = buildLibRextCore()
const {
    config,
    utils,
    fileHandler,
} = libRextCore

export default libRextCore;
export {
    config,
    utils,
    fileHandler,
}