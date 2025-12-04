"use strict"

import buildHtmlColours from './build-html-colours'
import buildHtmlShapes from './build-html-shapes'
import buildHtmlTypography from './build-html-typography'

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
