"use strict"

import buildHtmlColours from './build-html-colours'
import buildHtmlShapes from './build-html-shapes'
import buildHtmlTypography from './build-html-typography'

/**
 * HTML builder scripts
 * @namespace templateBuilders
 */
const build = () => {
    return {
        htmlColours: buildHtmlColours(),
        htmlShapes: buildHtmlShapes(),
        htmlTypography: buildHtmlTypography(),
    }
}

export default build
