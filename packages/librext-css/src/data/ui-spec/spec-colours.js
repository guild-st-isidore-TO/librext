const libRextCssUtil = require('../../builders/utils')

const librextGreyscale = [
    "#ffffff",
    "#f6f8fa",
    "#eaeef2",
    "#d0d7de",
    "#afb8c1",
    "#8c959f",
    "#6e7781",
    "#57606a",
    "#424a53",
    "#32383f",
    "#24292f",
    "#000000",
]
const greyProps = {}
librextGreyscale.forEach((col, idx) => {
    greyProps[`grey${idx}`] = col
})

const librextTheme = {
    "khaki": "#EADFB4",
    "powderBlue": "#9BB0C1",
    "cerulean": "#51829b",
    "orange": "#F6995C",
    "lightBlue": "#E6FAFF",
    "oceanBlue": "#1B628F",
    "navyBlue": "#053C5F",
    "deepBlue": "#00335E"
}
const themeProps = {}
// librextGreyscale.forEach((col, idx) => {
for (const themeColName in librextTheme) {
    const formattedColName = libRextCssUtil.capitalizeFirstLetter(themeColName)
    themeProps[`theme${formattedColName}`] = librextTheme[themeColName]
    // })
}


const lightCols = {
    ...greyProps,
    ...themeProps,
    text: librextGreyscale[11],
    background: librextGreyscale[1],
    primary: librextTheme.oceanBlue,
    secondary: librextTheme.orange,
    muted: librextTheme.lightBlue,
}

const darkCols = {
    ...greyProps,
    ...themeProps,
    text: librextGreyscale[0],
    background: librextGreyscale[10],
    primary: librextTheme.oceanBlue,
    secondary: librextTheme.orange,
    muted: librextTheme.lightBlue,
}

const themeColour = {
    colors: {
        ...lightCols,
        modes: {
            dark: darkCols,
        },
    },
}

module.exports = {
    librextGreyscale,
    librextTheme,
    theme: themeColour,
}
