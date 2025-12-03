const themeText = {
    fonts: {
        body: '"CrimsonText", "Crimson Text", "Times New Roman", Georgia, serif',
        bodyAlt: '"OpenSans", "Open Sans", Arial, Helvetica, sans-serif',
        heading: '"CormorantGaramond", "Cormorant Garamond", "Times New Roman", Georgia, serif',
        headingAlt: '"CrimsonText", "Crimson Text", "Times New Roman", Georgia, serif',
        display: '"Cinzel", "Times New Roman", Georgia, serif',
        monospace: 'Inconsolata, Courier, Monaco, monospace',
        label: '"OpenSans", "Open Sans", Arial, Helvetica, sans-serif',
        uiHeading: '"OpenSans", "Open Sans", Arial, Helvetica, sans-serif',
        uiBody: '"Lato", Arial, Helvetica, sans-serif',
    },
    fontSizes: [
        '0.75rem',
        '0.833rem',
        '1rem',
        '1.2rem',
        '1.44rem',
        '1.728rem',
        '2.074rem',
        '2.488rem',
        '2.986rem',
    ],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.25,
        heading: 1.125,
    },
    /** LibRext Document Roles */
    docRoles: {
        hero: {
            fontFamily: 'display',
            weight: "bold",
            lineHeight: 'heading',
            fontSize: 8,
            data: {
                name: "hero",
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
            data: {
                name: "headline",
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
            data: {
                name: "title",
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
            data: {
                name: "subtitle",
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
            data: {
                name: "heading1",
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
            data: {
                name: "heading2",
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
            data: {
                name: "heading3",
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
            data: {
                name: "heading4",
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
            data: {
                name: "heading5",
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
            data: {
                name: "heading6",
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
            data: {
                name: "body",
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
            data: {
                name: "strong",
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
            data: {
                name: "em",
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
            data: {
                name: "link",
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
            data: {
                name: "small",
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
            data: {
                name: "tiny",
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
            data: {
                name: "superscript",
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
            data: {
                name: "subscript",
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
            data: {
                name: "imgcaption",
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
            data: {
                name: "codeinline",
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
            data: {
                name: "codeblock",
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
            data: {
                name: "quote",
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
            data: {
                name: "blockquote",
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
            data: {
                name: "pullquote",
                html: "",
                class: "lbrxt-pquote",
                styles: [
                    "italic"
                ]
            }
        },
    }
}

module.exports = {
    theme: themeText,
}
