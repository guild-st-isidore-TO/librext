const fontSizes = require('./spec-text').fontSizes
const librextGreyscale = require('./spec-colours').librextGreyscale
const librextTheme = require('./spec-colours').librextTheme

const themeLibRext = {
    /**
     * DATA - Custom data
     */
    libRextData: {
        fontSizes: {
            h1: fontSizes[8],
            h2: fontSizes[7],
            h3: fontSizes[6],
            h4: fontSizes[5],
            h5: fontSizes[4],
            h6: fontSizes[3],
            body: fontSizes[2],
            small: fontSizes[1],
            tiny: fontSizes[0],
        },
        palette: {
            grey: librextGreyscale,
            theme: librextTheme,
        },
    }
}

module.exports = {
    theme: themeLibRext,
}
