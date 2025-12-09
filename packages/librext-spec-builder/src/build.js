"use strict"

import libRextCore from 'librext-core'
import buildThemeLibRext from './spec-librext.js'
import { buildTypeScale, buildTypeScaleData } from './type-scale.js'

/**
 * Custom Librext UI Data (doesn't conform to Theme-UI spec)
 * @namespace buildSpec
 */
const buildSpec = (uiSpec, config) => {

    const libRextTypeScale = buildTypeScale(config)
    let newSpec = {
        ...uiSpec,
        fontSizes: libRextTypeScale
    }

    const libRextTypeScaleData = buildTypeScaleData(config)
    const specLibRext = buildThemeLibRext(config)
    const newLibRextSpec = {
        ...specLibRext.libRextData,
        fontSizes: libRextTypeScaleData
    }

    const outSpec = {
        ...newSpec,
        libRextData: newLibRextSpec,
    }
    // console.log('[LibRext Spec Builder] outSpec', outSpec)
    return outSpec
}

export default buildSpec;
