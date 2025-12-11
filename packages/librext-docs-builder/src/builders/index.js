/**
 * @file LibRext Docs Builder
 */

"use strict"

import { join } from 'path'
import { config } from 'librext-core'

import { projectRootDir } from '../docs-builder-util.js'
import docHome from './doc-home.js'
import docColours from './doc-colours.js'
import docShapes from './doc-shapes.js'
import docTypography from './doc-typography.js'
import docStylesheets from './doc-stylesheets.js'

const defaultOutputDir = join(projectRootDir, config.outDirectory)

/**
 * HTML builder scripts
 * @namespace libRextDocsBuilder
*/
const build = (uiSpec, outputDir = defaultOutputDir, config) => {
    // console.log('[LibRext Docs Builder] uiSpec', uiSpec);
    console.log('[LibRext Docs Builder] outputDir', outputDir);
    return {
        htmlColours: docColours(uiSpec, outputDir, config),
        htmlHome: docHome(uiSpec, outputDir, config),
        htmlShapes: docShapes(uiSpec, outputDir, config),
        htmlTypography: docTypography(uiSpec, outputDir, config),
        htmlStylesheet: docStylesheets(uiSpec, outputDir, config),
    }
}

export default build
