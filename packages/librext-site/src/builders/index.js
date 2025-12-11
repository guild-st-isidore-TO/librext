/**
 * @file LibRext Site Builder
 */

"use strict"

import { join } from 'path'
import { config } from 'librext-core'

import { projectRootDir } from '../site-builder-util.js'
import siteHome from './site-home.js'
import siteColours from './site-colours.js'
import siteShapes from './site-shapes.js'
import siteTypography from './site-typography.js'
import siteStylesheets from './site-stylesheets.js'

const defaultOutputDir = join(projectRootDir, config.outDirectory)

/**
 * HTML builder scripts
 * @namespace libRextSite
*/
const build = (uiSpec, outputDir = defaultOutputDir, config) => {
    // console.log('[LibRext Site Builder] uiSpec', uiSpec);
    // console.log('[LibRext Site Builder] outputDir', outputDir);
    return {
        htmlColours: siteColours(uiSpec, outputDir, config),
        htmlHome: siteHome(uiSpec, outputDir, config),
        htmlShapes: siteShapes(uiSpec, outputDir, config),
        htmlTypography: siteTypography(uiSpec, outputDir, config),
        htmlSylesheets: siteStylesheets(uiSpec, outputDir, config),
    }
}

export default build
