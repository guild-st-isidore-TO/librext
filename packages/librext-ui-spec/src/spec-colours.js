import libRextCssUtil from './utils.js'


const librextGreyscale = [
    "#fdf9f0", // "#ffffff",
    "#f2ede5", // "#fdf9f0",
    "#e1dbd4", // "#e7e3da",
    "#cfcac3", // "#d2ccc4", 
    "#b1aba6", // "#bcb5af", 
    "#918b88", // "#a49d98", 
    "#676261", // "#8c8480", 
    "#3f3c3c", // "#726a68", 
    "#2e2b2b", // "#554f4d", 
    "#1b1818", // "#363030", 
    "#110e0e", // "#100c0c", 
    "#050404", // "#000000",
]

const greyProps = {}
librextGreyscale.forEach((col, idx) => {
    greyProps[`grey${idx}`] = col
})

const librextTheme = {
    rubricRed: '#881403',
    okGreen: '#77A265',
    warnYellow: '#F6BF17',
    errorRed: '#AC4945',
    infoBlue: '#2471B8',
    brown1: "#885743",
    brown2: "#A67257",
    brown3: "#C29775",
}
const themeProps = {}
for (const themeColName in librextTheme) {
    const formattedColName = libRextCssUtil.capitalizeFirstLetter(themeColName)
    themeProps[`theme${formattedColName}`] = librextTheme[themeColName]

}

const lightCols = {
    ...greyProps,
    ...themeProps,
    text: librextGreyscale[11],
    textRubric: librextTheme.rubricRed,
    background: librextGreyscale[1],
    primary: librextTheme.brown1,
    secondary: librextTheme.brown2,
    tertiary: librextTheme.brown3,
    indicatorOk: librextTheme.okGreen,
    indicatorWarn: librextTheme.warnYellow,
    indicatorInfo: librextTheme.infoBlue,
    indicatorError: librextTheme.errorRed,
    indicatorNull: librextGreyscale[6],
}

const darkCols = {
    ...greyProps,
    ...themeProps,
    text: librextGreyscale[0],
    textRubric: librextTheme.rubricRed,
    background: librextGreyscale[10],
    primary: librextTheme.brown1,
    secondary: librextTheme.brown2,
    tertiary: librextTheme.brown3,
    indicatorOk: librextTheme.okGreen,
    indicatorWarn: librextTheme.warnYellow,
    indicatorInfo: librextTheme.infoBlue,
    indicatorError: librextTheme.errorRed,
    indicatorNull: librextGreyscale[6],
}

const themeColour = {
    colors: {
        ...lightCols,
        modes: {
            dark: darkCols,
            indicatorNull: librextGreyscale[6],
            indicatorError: librextTheme.errorRed,
            tertiary: librextTheme.brown3,
        },
    },
}

export default themeColour
export { themeColour as theme, librextGreyscale, librextTheme }