import { utils } from "librext-core"

const buildGreyscaleProps = (greyscale) => {
    const greyProps = {}
    greyscale.forEach((greyHexCol, idx) => {
        greyProps[`grey${idx}`] = greyHexCol
    })

    return greyProps
}

const buildThemeProps = (themeObj) => {
    const themeProps = {}

    for (const themeColName in themeObj) {
        const formattedColName = utils.capitalizeFirstLetter(themeColName)
        const hexCol = themeObj[themeColName]
        themeProps[`theme${formattedColName}`] = hexCol
    }

    return themeProps
}

const specTheme = {
    buildGreyscaleProps,
    buildThemeProps,
}

export default specTheme
export {
    buildGreyscaleProps,
    buildThemeProps,
}