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
    "#000000"
]

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

const themeColour = {
    colors: {
        palette: {
            grey: librextGreyscale,
            theme: librextTheme,
        },
        text: '#000',
        background: '#fff',
        primary: '#07c',
        secondary: '#05a',
        muted: '#f6f6f6',
        modes: {
            dark: {
                palette: {
                    grey: librextGreyscale,
                    theme: librextTheme,
                },
                text: '#fff',
                background: '#000',
                primary: '#0cf',
                secondary: '#09c',
                muted: '#111',
            },
        },
    },
}

module.exports = {
    theme: themeColour,
}
