"use strict"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import buildHtmlColours from './build-html-colours.js'
import buildHtmlShapes from './build-html-shapes.js'
import buildHtmlTypography from './build-html-typography.js'

const defaultOutputDir = `${__dirname}/../../dist`

/**
 * HTML builder scripts
 * @namespace templateBuilders
*/
const build = (uiSpec, outputDir = defaultOutputDir) => {
    console.log('[LibRext Docs Builder] uiSpec', uiSpec);
    console.log('[LibRext Docs Builder] outputDir', outputDir);
    return {
        htmlColours: buildHtmlColours(uiSpec, outputDir),
        htmlShapes: buildHtmlShapes(uiSpec, outputDir),
        htmlTypography: buildHtmlTypography(uiSpec, outputDir),
    }
}

export default build
