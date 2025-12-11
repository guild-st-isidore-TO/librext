/**
 * @file LibRext Spec Builder
 */

"use strict"

import { config as coreConfig } from 'librext-core'

import fontFamiliesData from './data/font-families.json' with { type: 'json' };
import buildThemeLibRext from './spec-librext.js'
import { buildTypeScale, buildTypeScaleData } from './type-scale.js'
import { buildGreyscaleProps, buildThemeProps } from './spec-theme.js'

/**
 * Custom Librext UI Data (doesn't conform to Theme-UI spec)
 * @namespace libRextSpecBuilder
 */
const buildSpec = (uiSpec, config = coreConfig) => {

    /* ----------------------------------------
     * Fonts
     * ------------------------------------- */

    let libRextFonts = {}
    for (const fontRole in config.fonts) {
        const fontKey = config.fonts[fontRole]
        const fontFamValue = fontFamiliesData.fontFamilies[fontKey]
        libRextFonts[fontRole] = fontFamValue
    }
    console.log('[LibRext Spec Builder] config.fonts', config.fonts)
    console.log('[LibRext Spec Builder] libRextFonts', libRextFonts)

    /* ----------------------------------------
     * Theme
     * ------------------------------------- */

    // Format theme data from config
    const configThemeProps = buildThemeProps(config.themeColours)

    // Remove existing theme colours in default spec
    let outColours = {};
    for (const colRole in uiSpec.colors) {
        if (!colRole.startsWith('theme')) {
            outColours[colRole] = uiSpec.colors[colRole]
        }
    }

    // Replace defualt spec theme with config values
    for (const colRole in configThemeProps) {
        outColours[colRole] = configThemeProps[colRole]
    }

    /* ----------------------------------------
     * UI Spec overrides
     * ------------------------------------- */

    const libRextTypeScale = buildTypeScale(config)
    let newSpec = {
        ...uiSpec,
        colors: outColours,
        fonts: libRextFonts,
        fontSizes: libRextTypeScale
    }

    /* ----------------------------------------
     * LibRext Spec overrides
     * ------------------------------------- */

    const libRextTypeScaleData = buildTypeScaleData(config)
    const specLibRext = buildThemeLibRext(config)

    const newLibRextSpec = {
        ...specLibRext.libRextData,
        fontSizes: libRextTypeScaleData
    }

    /* ----------------------------------------
     * Output Spec
     * ------------------------------------- */

    const outSpec = {
        ...newSpec,
        libRextData: newLibRextSpec,
    }
    console.log('[LibRext Spec Builder] outSpec', outSpec)
    return outSpec
}

export default buildSpec;
