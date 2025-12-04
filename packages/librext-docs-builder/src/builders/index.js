"use strict"

import buildHtmlColours from './build-html-colours'
import buildHtmlShapes from './build-html-shapes'
import buildHtmlTypography from './build-html-typography'

const defaultOutputDir = `${__dirname}/../../dist`

/**
 * HTML builder scripts
 * @namespace templateBuilders
 */
const build = (outputDir = defaultOutputDir, uiSpec) => {
    return {
        htmlColours: buildHtmlColours(outputDir, uiSpec),
        htmlShapes: buildHtmlShapes(outputDir, uiSpec),
        htmlTypography: buildHtmlTypography(outputDir, uiSpec),
    }
}

export default build
