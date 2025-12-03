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
    /**
     * VARIANTS - LibRext Document Roles
     */
    docRoles: {
        hero: {
            fontFamily: 'display',
            weight: "bold",
            lineHeight: 'heading',
            fontSize: 8,
            libRextData: {
                name: "hero",
                typescale: "h1",
                html: "",
                class: "lbrxt-hero",
                styles: []
            }
        },
        headline: {
            fontFamily: 'display',
            weight: "bold",
            lineHeight: 'heading',
            fontSize: 8,
            libRextData: {
                name: "headline",
                typescale: "h1",
                html: "",
                class: "lbrxt-headline",
                styles: []
            }
        },
        title: {
            fontFamily: 'display',
            weight: "bold",
            lineHeight: 'heading',
            fontSize: 8,
            libRextData: {
                name: "title",
                typescale: "h1",
                html: "",
                class: "lbrxt-title",
                styles: []
            }
        },
        subtitle: {
            fontFamily: 'display',
            weight: "body",
            lineHeight: 'body',
            fontSize: 6,
            libRextData: {
                name: "subtitle",
                typescale: "h3",
                html: "",
                class: "lbrxt-subtitle",
                styles: []
            }
        },
        heading1: {
            fontFamily: 'display',
            weight: "bold",
            lineHeight: 'heading',
            fontSize: 8,
            libRextData: {
                name: "heading1",
                typescale: "h1",
                html: "h1",
                class: "lbrxt-h1",
                styles: []
            }
        },
        heading2: {
            fontFamily: 'display',
            weight: "bold",
            lineHeight: 'heading',
            fontSize: 7,
            libRextData: {
                name: "heading2",
                typescale: "h2",
                html: "h2",
                class: "lbrxt-h2",
                styles: []
            }
        },
        heading3: {
            fontFamily: 'display',
            weight: "bold",
            lineHeight: 'heading',
            fontSize: 6,
            libRextData: {
                name: "heading3",
                typescale: "h3",
                html: "h3",
                class: "lbrxt-h3",
                styles: []
            }
        },
        heading4: {
            fontFamily: 'display',
            weight: "bold",
            lineHeight: 'heading',
            fontSize: 5,
            libRextData: {
                name: "heading4",
                typescale: "h4",
                html: "h4",
                class: "lbrxt-h4",
                styles: []
            }
        },
        heading5: {
            fontFamily: 'display',
            weight: "bold",
            lineHeight: 'heading',
            fontSize: 4,
            libRextData: {
                name: "heading5",
                typescale: "h5",
                html: "h5",
                class: "lbrxt-h5",
                styles: []
            }
        },
        heading6: {
            fontFamily: 'display',
            weight: "bold",
            lineHeight: 'heading',
            fontSize: 3,
            libRextData: {
                name: "heading6",
                typescale: "h6",
                html: "h6",
                class: "lbrxt-h6",
                styles: []
            }
        },
        body: {
            fontFamily: 'display',
            weight: "body",
            lineHeight: 'body',
            fontSize: 2,
            libRextData: {
                name: "body",
                typescale: "body",
                html: "p, span",
                class: "lbrxt-body",
                styles: []
            }
        },
        strong: {
            fontFamily: 'display',
            weight: "bold",
            lineHeight: 'heading',
            fontSize: 2,
            libRextData: {
                name: "strong",
                typescale: "body",
                html: "b, strong",
                class: "lbrxt-strong",
                styles: []
            }
        },
        em: {
            fontFamily: 'display',
            weight: "body",
            lineHeight: 'body',
            fontSize: 2,
            libRextData: {
                name: "em",
                typescale: "body",
                html: "i, em",
                class: "lbrxt-em",
                styles: [
                    "italic"
                ]
            }
        },
        link: {
            fontFamily: 'display',
            weight: "body",
            lineHeight: 'body',
            fontSize: 2,
            libRextData: {
                name: "link",
                typescale: "body",
                html: "a",
                class: "lbrxt-link",
                styles: []
            }
        },
        small: {
            fontFamily: 'display',
            weight: "body",
            lineHeight: 'body',
            fontSize: 1,
            libRextData: {
                name: "small",
                typescale: "small",
                html: "small",
                class: "lbrxt-small",
                styles: []
            }
        },
        tiny: {
            fontFamily: 'display',
            weight: "body",
            lineHeight: 'body',
            fontSize: 0,
            libRextData: {
                name: "tiny",
                typescale: "tiny",
                html: "",
                class: "lbrxt-tiny",
                styles: []
            }
        },
        superscript: {
            fontFamily: 'display',
            weight: "body",
            lineHeight: 'body',
            fontSize: 0,
            libRextData: {
                name: "superscript",
                typescale: "tiny",
                html: "sup",
                class: "lbrxt-super",
                styles: []
            }
        },
        subscript: {
            fontFamily: 'display',
            weight: "body",
            lineHeight: 'body',
            fontSize: 0,
            libRextData: {
                name: "subscript",
                typescale: "tiny",
                html: "sub",
                class: "lbrxt-sub",
                styles: []
            }
        },
        imgcaption: {
            fontFamily: 'display',
            weight: "body",
            lineHeight: 'body',
            fontSize: 1,
            libRextData: {
                name: "imgcaption",
                typescale: "small",
                html: "figcaption",
                class: "lbrxt-imgcap",
                styles: []
            }
        },
        codeinline: {
            fontFamily: 'display',
            weight: "body",
            lineHeight: 'body',
            fontSize: 2,
            libRextData: {
                name: "codeinline",
                typescale: "body",
                html: "code",
                class: "lbrxt-codein",
                styles: []
            }
        },
        codeblock: {
            fontFamily: 'display',
            weight: "body",
            lineHeight: 'body',
            fontSize: 2,
            libRextData: {
                name: "codeblock",
                typescale: "body",
                html: "pre",
                class: "lbrxt-codeblk",
                styles: []
            }
        },
        quote: {
            fontFamily: 'display',
            weight: "body",
            lineHeight: 'body',
            fontSize: 2,
            libRextData: {
                name: "quote",
                typescale: "body",
                html: "q",
                class: "lbrxt-quote",
                styles: [
                    "italic"
                ]
            }
        },
        blockquote: {
            fontFamily: 'display',
            weight: "body",
            lineHeight: 'body',
            fontSize: 2,
            libRextData: {
                name: "blockquote",
                typescale: "body",
                html: "blockquote",
                class: "lbrxt-bquote",
                styles: [
                    "italic"
                ]
            }
        },
        pullquote: {
            fontFamily: 'display',
            weight: "body",
            lineHeight: 'body',
            fontSize: 2,
            libRextData: {
                name: "pullquote",
                typescale: "body",
                html: "",
                class: "lbrxt-pquote",
                styles: [
                    "italic"
                ]
            }
        },
    },
    /**
     * DATA - 
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
    }
}

module.exports = {
    theme: themeText,
}
