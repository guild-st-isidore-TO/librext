import {
    librextGreyscale,
    librextTheme,
    fontSizes,
} from 'librext-ui-spec'

// import { fontSizes } from './spec-text.js'
// import { librextGreyscale } from './spec-colours.js'
// import { librextTheme } from './spec-colours.js'

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
        docRoles: {
            hero: {
                typescale: "h1",
                html: "",
                class: "lbrxt-hero",
                styles: []
            },
            headline: {
                typescale: "h1",
                html: "",
                class: "lbrxt-headline",
                styles: []
            },
            title: {
                typescale: "h1",
                html: "",
                class: "lbrxt-title",
                styles: []
            },
            subtitle: {
                typescale: "h3",
                html: "",
                class: "lbrxt-subtitle",
                styles: []
            },
            heading1: {
                typescale: "h1",
                html: "h1",
                class: "lbrxt-h1",
                styles: []
            },
            heading2: {
                typescale: "h2",
                html: "h2",
                class: "lbrxt-h2",
                styles: []
            },
            heading3: {
                typescale: "h3",
                html: "h3",
                class: "lbrxt-h3",
                styles: []
            },
            heading4: {
                typescale: "h4",
                html: "h4",
                class: "lbrxt-h4",
                styles: []
            },
            heading5: {
                typescale: "h5",
                html: "h5",
                class: "lbrxt-h5",
                styles: []
            },
            heading6: {
                typescale: "h6",
                html: "h6",
                class: "lbrxt-h6",
                styles: []
            },
            body: {
                typescale: "body",
                html: "p, span",
                class: "lbrxt-body",
                styles: []
            },
            strong: {
                typescale: "body",
                html: "b, strong",
                class: "lbrxt-strong",
                styles: []
            },
            em: {
                typescale: "body",
                html: "i, em",
                class: "lbrxt-em",
                styles: [
                    "italic"
                ]
            },
            link: {
                typescale: "body",
                html: "a",
                class: "lbrxt-link",
                styles: []
            },
            small: {
                typescale: "small",
                html: "small",
                class: "lbrxt-small",
                styles: []
            },
            tiny: {
                typescale: "tiny",
                html: "",
                class: "lbrxt-tiny",
                styles: []
            },
            superscript: {
                typescale: "tiny",
                html: "sup",
                class: "lbrxt-super",
                styles: []
            },
            subscript: {
                typescale: "tiny",
                html: "sub",
                class: "lbrxt-sub",
                styles: []
            },
            imgcaption: {
                typescale: "small",
                html: "figcaption",
                class: "lbrxt-imgcap",
                styles: []
            },
            codeinline: {
                typescale: "body",
                html: "code",
                class: "lbrxt-codein",
                styles: []
            },
            codeblock: {
                typescale: "body",
                html: "pre",
                class: "lbrxt-codeblk",
                styles: []
            },
            quote: {
                typescale: "body",
                html: "q",
                class: "lbrxt-quote",
                styles: [
                    "italic"
                ]
            },
            blockquote: {
                typescale: "body",
                html: "blockquote",
                class: "lbrxt-bquote",
                styles: [
                    "italic"
                ]
            },
            pullquote: {
                typescale: "body",
                html: "",
                class: "lbrxt-pquote",
                styles: [
                    "italic"
                ]
            },
        }
    }
}

// module.exports = {
//     theme: themeLibRext,
// }

export default themeLibRext