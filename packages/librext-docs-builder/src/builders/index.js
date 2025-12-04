"use strict"

import buildHtmlColours from './build-html-colours'
import buildHtmlShapes from './build-html-shapes'
import buildHtmlTypography from './build-html-typography'

const defaultOutputDir = `${__dirname}/../../dist`

/**
 * HTML builder scripts
 * @namespace templateBuilders
 */
const build = (outputDir = defaultOutputDir) => {
    return {
        htmlColours: buildHtmlColours(outputDir),
        htmlShapes: buildHtmlShapes(outputDir),
        htmlTypography: buildHtmlTypography(outputDir),
    }
}

export default build
