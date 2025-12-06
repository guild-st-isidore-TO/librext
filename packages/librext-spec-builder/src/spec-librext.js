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
                desc: 'Hero text style',
                typescale: "h1",
                html: "",
                class: "lbrxt-hero",
                styles: []
            },
            headline: {
                desc: 'Headline text style',
                typescale: "h1",
                html: "",
                class: "lbrxt-headline",
                styles: []
            },
            title: {
                desc: 'Title text style',
                typescale: "h1",
                html: "",
                class: "lbrxt-title",
                styles: []
            },
            subtitle: {
                desc: 'Subtitle text style',
                typescale: "h3",
                html: "",
                class: "lbrxt-subtitle",
                styles: []
            },
            heading1: {
                desc: 'Heading1 text style',
                typescale: "h1",
                html: "h1",
                class: "lbrxt-h1",
                styles: []
            },
            heading2: {
                desc: 'Heading2 text style',
                typescale: "h2",
                html: "h2",
                class: "lbrxt-h2",
                styles: []
            },
            heading3: {
                desc: 'Heading3 text style',
                typescale: "h3",
                html: "h3",
                class: "lbrxt-h3",
                styles: []
            },
            heading4: {
                desc: 'Heading4 text style',
                typescale: "h4",
                html: "h4",
                class: "lbrxt-h4",
                styles: []
            },
            heading5: {
                desc: 'Heading5 text style',
                typescale: "h5",
                html: "h5",
                class: "lbrxt-h5",
                styles: []
            },
            heading6: {
                desc: 'Heading6 text style',
                typescale: "h6",
                html: "h6",
                class: "lbrxt-h6",
                styles: []
            },
            body: {
                desc: 'Body text style',
                typescale: "body",
                html: "p, span",
                class: "lbrxt-body",
                styles: []
            },
            strong: {
                desc: 'Strong text style',
                typescale: "body",
                html: "b, strong",
                class: "lbrxt-strong",
                styles: []
            },
            em: {
                desc: 'Em text style',
                typescale: "body",
                html: "i, em",
                class: "lbrxt-em",
                styles: [
                    "italic"
                ]
            },
            li: {
                desc: 'List item text style',
                typescale: "body",
                html: "li",
                class: "lbrxt-li",
                styles: []
            },
            link: {
                desc: 'Link text style',
                typescale: "body",
                html: "a",
                class: "lbrxt-link",
                styles: []
            },
            small: {
                desc: 'Small text style',
                typescale: "small",
                html: "small",
                class: "lbrxt-small",
                styles: []
            },
            tiny: {
                desc: 'Tiny text style',
                typescale: "tiny",
                html: "",
                class: "lbrxt-tiny",
                styles: []
            },
            superscript: {
                desc: 'Superscript text style',
                typescale: "tiny",
                html: "sup",
                class: "lbrxt-super",
                styles: []
            },
            subscript: {
                desc: 'Subscript text style',
                typescale: "tiny",
                html: "sub",
                class: "lbrxt-sub",
                styles: []
            },
            imgcaption: {
                desc: 'Imgcaption text style',
                typescale: "small",
                html: "figcaption",
                class: "lbrxt-imgcap",
                styles: []
            },
            codeinline: {
                desc: 'Codeinline text style',
                typescale: "body",
                html: "code",
                class: "lbrxt-codein",
                styles: []
            },
            codeblock: {
                desc: 'Codeblock text style',
                typescale: "body",
                html: "pre",
                class: "lbrxt-codeblk",
                styles: []
            },
            quote: {
                desc: 'Quote text style',
                typescale: "body",
                html: "q",
                class: "lbrxt-quote",
                styles: [
                    "italic"
                ]
            },
            blockquote: {
                desc: 'Blockquote text style',
                typescale: "body",
                html: "blockquote",
                class: "lbrxt-bquote",
                styles: [
                    "italic"
                ]
            },
            pullquote: {
                desc: 'Pullquote text style',
                typescale: "body",
                html: "",
                class: "lbrxt-pquote",
                styles: [
                    "italic"
                ]
            },
        },
        colourRoles: {
            text: {
                roleName: 'Text',
                desc: 'Text colour',
                colName: '...',
            },
            textRubric: {
                roleName: 'Rubric Text',
                desc: 'Text colour',
                colName: '...',
            },
            background: {
                roleName: 'Background',
                desc: 'Background colour',
                colName: '...',
            },
            primary: {
                roleName: 'Primary Accent',
                desc: 'Primary Accent colour',
                colName: '...',
            },
            secondary: {
                roleName: 'Secondary Accent',
                desc: 'Secondary Accent colour',
                colName: '...',
            },
            tertiary: {
                roleName: 'Tertiary Accent',
                desc: 'Tertiary Accent colour',
                colName: '...',
            },
            indicatorOk: {
                roleName: 'Indicator Ok',
                desc: 'Indicator Ok colour',
                colName: '...',
            },
            indicatorWarn: {
                roleName: 'Indicator Warn',
                desc: 'Indicator Warn colour',
                colName: '...',
            },
            indicatorError: {
                roleName: 'Indicator Error',
                desc: 'Indicator Error colour',
                colName: '...',
            },
            indicatorInfo: {
                roleName: 'Indicator Info',
                desc: 'Indicator Info colour',
                colName: '...',
            },
            indicatorNull: {
                roleName: 'Indicator Null',
                desc: 'Indicator Null colour',
                colName: '...',
            },
        }
    }
}

export default themeLibRext