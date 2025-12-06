const fontSizes = [
    '0.75rem',
    '0.833rem',
    '1rem',
    '1.2rem',
    '1.44rem',
    '1.728rem',
    '2.074rem',
    '2.488rem',
    '2.986rem',
]

const themeText = {
    fonts: {
        body: '"CrimsonText", "Crimson Text", "Times New Roman", Georgia, serif',
        bodyAlt: '"OpenSans", "Open Sans", Arial, Helvetica, sans-serif',
        heading: '"CormorantGaramond", "Cormorant Garamond", "Times New Roman", Georgia, serif',
        headingAlt: '"CrimsonText", "Crimson Text", "Times New Roman", Georgia, serif',
        display: '"Cinzel", "Times New Roman", Georgia, serif',
        monospace: '"Inconsolata", Courier, "Monaco", monospace',
        label: '"OpenSans", "Open Sans", Arial, Helvetica, sans-serif',
        uiHeading: '"OpenSans", "Open Sans", Arial, Helvetica, sans-serif',
        uiBody: '"Lato", Arial, Helvetica, sans-serif',
    },
    fontSizes,
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.25,
        heading: 1.125,
    },
    letterSpacings: {
        body: '0.02rem',
        heading: '0.04rem',
        display: 'normal',
        monospace: 'normal',
    },
    /**
     * VARIANTS - Margin presets
     */
    marginPresets: {
        body: {
            marginBottom: '1.25rem',
        },
        heading: {
            marginTop: '2.5rem',
            marginBottom: '1.25rem',
        }
    },
    /**
     * VARIANTS - LibRext Document Roles
     */
    docRoles: {
        hero: {
            fontFamily: 'display',
            weight: "bold",
            lineHeight: 'heading',
            letterSpacing: 'heading',
            fontSize: 8,
        },
        headline: {
            fontFamily: 'heading',
            weight: "bold",
            lineHeight: 'heading',
            letterSpacing: 'heading',
            fontSize: 8,
        },
        title: {
            fontFamily: 'display',
            weight: "bold",
            lineHeight: 'heading',
            letterSpacing: 'heading',
            fontSize: 8,
        },
        subtitle: {
            fontFamily: 'heading',
            weight: "body",
            lineHeight: 'body',
            letterSpacing: 'body',
            fontSize: 6,
        },
        heading1: {
            fontFamily: 'heading',
            weight: "bold",
            lineHeight: 'heading',
            letterSpacing: 'heading',
            fontSize: 8,
        },
        heading2: {
            fontFamily: 'heading',
            weight: "bold",
            lineHeight: 'heading',
            letterSpacing: 'heading',
            fontSize: 7,
        },
        heading3: {
            fontFamily: 'heading',
            weight: "bold",
            lineHeight: 'heading',
            letterSpacing: 'heading',
            fontSize: 6,
        },
        heading4: {
            fontFamily: 'heading',
            weight: "bold",
            lineHeight: 'heading',
            letterSpacing: 'heading',
            fontSize: 5,
        },
        heading5: {
            fontFamily: 'heading',
            weight: "bold",
            lineHeight: 'heading',
            letterSpacing: 'heading',
            fontSize: 4,
        },
        heading6: {
            fontFamily: 'heading',
            weight: "bold",
            lineHeight: 'heading',
            letterSpacing: 'heading',
            fontSize: 3,
        },
        body: {
            fontFamily: 'body',
            weight: "body",
            lineHeight: 'body',
            letterSpacing: 'body',
            fontSize: 2,
        },
        strong: {
            fontFamily: 'body',
            weight: "bold",
            lineHeight: 'heading',
            letterSpacing: 'heading',
            fontSize: 2,
        },
        em: {
            fontFamily: 'body',
            weight: "body",
            lineHeight: 'body',
            letterSpacing: 'body',
            fontSize: 2
        },
        link: {
            fontFamily: 'body',
            weight: "body",
            lineHeight: 'body',
            letterSpacing: 'body',
            fontSize: 2,
        },
        small: {
            fontFamily: 'body',
            weight: "body",
            lineHeight: 'body',
            letterSpacing: 'body',
            fontSize: 1,
        },
        tiny: {
            fontFamily: 'body',
            weight: "body",
            lineHeight: 'body',
            letterSpacing: 'body',
            fontSize: 0,
        },
        superscript: {
            fontFamily: 'body',
            weight: "body",
            lineHeight: 'body',
            letterSpacing: 'body',
            fontSize: 0,
        },
        subscript: {
            fontFamily: 'body',
            weight: "body",
            lineHeight: 'body',
            letterSpacing: 'body',
            fontSize: 0,
        },
        imgcaption: {
            fontFamily: 'body',
            weight: "body",
            lineHeight: 'body',
            letterSpacing: 'body',
            fontSize: 1,
        },
        codeinline: {
            fontFamily: 'monospace',
            weight: "body",
            lineHeight: 'body',
            letterSpacing: 'body',
            fontSize: 2,
        },
        codeblock: {
            fontFamily: 'monospace',
            weight: "body",
            lineHeight: 'body',
            letterSpacing: 'body',
            fontSize: 2,
        },
        quote: {
            fontFamily: 'body',
            weight: "body",
            lineHeight: 'body',
            letterSpacing: 'body',
            fontSize: 2
        },
        blockquote: {
            fontFamily: 'body',
            weight: "body",
            lineHeight: 'body',
            letterSpacing: 'body',
            fontSize: 2
        },
        pullquote: {
            fontFamily: 'body',
            weight: "body",
            lineHeight: 'body',
            letterSpacing: 'body',
            fontSize: 2
        },
    }
}

// module.exports = {
//     fontSizes,
//     theme: themeText,
// }

export default themeText
export { themeText as theme, fontSizes }