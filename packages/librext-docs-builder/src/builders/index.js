"use strict"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import docHome from './doc-home.js'
import docColours from './doc-colours.js'
import docShapes from './doc-shapes.js'
import docTypography from './doc-typography.js'

const defaultOutputDir = `${__dirname}/../../dist`

/**
 * HTML builder scripts
 * @namespace templateBuilders
*/
const build = (uiSpec, outputDir = defaultOutputDir, config) => {
    // console.log('[LibRext Docs Builder] uiSpec', uiSpec);
    // console.log('[LibRext Docs Builder] outputDir', outputDir);
    return {
        htmlHome: docHome(uiSpec, outputDir, config),
        htmlColours: docColours(uiSpec, outputDir, config),
        htmlShapes: docShapes(uiSpec, outputDir, config),
        htmlTypography: docTypography(uiSpec, outputDir, config),
    }
}

export default build
