/**
 * @file LibRext Spec Builder
 */

"use strict"

import { config as coreConfig } from 'librext-core'
import buildThemeLibRext from './spec-librext.js'
import { buildTypeScale, buildTypeScaleData } from './type-scale.js'
import fontFamiliesData from './data/font-families.json' with { type: 'json' };
/**
 * Custom Librext UI Data (doesn't conform to Theme-UI spec)
 * @namespace libRextSpecBuilder
 */
const buildSpec = (uiSpec, config = coreConfig) => {

    let libRextFonts = {}
    for (const fontRole in config.fonts) {
        const fontKey = config.fonts[fontRole]
        const fontFamValue = fontFamiliesData.fontFamilies[fontKey]
        libRextFonts[fontRole] = fontFamValue
    }
    console.log('[LibRext Spec Builder] config.fonts', config.fonts)
    console.log('[LibRext Spec Builder] libRextFonts', libRextFonts)

    const libRextTypeScale = buildTypeScale(config)
    let newSpec = {
        ...uiSpec,
        fonts: libRextFonts,
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
    console.log('[LibRext Spec Builder] outSpec', outSpec)
    return outSpec
}

export default buildSpec;
