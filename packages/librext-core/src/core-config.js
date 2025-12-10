// DEFAULT VALUES
const DEF_PROJECT_NAME = 'LibRext'
const DEF_TOKEN_PREFIX = 'lbrxt'
const DEF_FILENAME_PREFIX = 'librext'
const DEF_OUT_DIRECTORY = '/dist' // relative to project root
const DEF_ASSET_OUT_DIRECTORY = '/dist' // relative to project root
const DEF_FONTS = [
    "cinzel",
    "cormorant-garamond",
    "crimson-text",
    "inconsolata",
    "lato",
    "open-sans"
]
const DEF_FORMAT = 'screen'
const DEF_LINK_COLOUR = 'primary'
const DEF_LINK_COLOUR_HOVER = 'tertiary'
const DEF_LINK_COLOUR_ACTIVE = 'tertiary'
const DEF_LINK_COLOUR_VISITED = 'secondary'

const projectName = DEF_PROJECT_NAME;
const tokenPrefix = DEF_TOKEN_PREFIX;
const filenamePrefix = DEF_FILENAME_PREFIX;
const outDirectory = DEF_OUT_DIRECTORY;
const assetOutDirectory = DEF_ASSET_OUT_DIRECTORY;
const fonts = DEF_FONTS;
const format = DEF_FORMAT;
const linkColour = DEF_LINK_COLOUR;
const linkColourHover = DEF_LINK_COLOUR_HOVER;
const linkColourActive = DEF_LINK_COLOUR_ACTIVE;
const linkColourVisited = DEF_LINK_COLOUR_VISITED;

const coreConfig = {
    DEF_PROJECT_NAME,
    DEF_TOKEN_PREFIX,
    DEF_FILENAME_PREFIX,
    DEF_OUT_DIRECTORY,
    DEF_ASSET_OUT_DIRECTORY,
    DEF_FORMAT,
    DEF_LINK_COLOUR,
    DEF_LINK_COLOUR_HOVER,
    DEF_LINK_COLOUR_ACTIVE,
    DEF_LINK_COLOUR_VISITED,
    projectName,
    tokenPrefix,
    filenamePrefix,
    outDirectory,
    assetOutDirectory,
    fonts,
    format, // (screen/print/ebook), 
    linkColour, // (which palette colour to use for HTML links), 
    linkColourHover,
    linkColourActive,
    linkColourVisited,
}

export default coreConfig
export {
    DEF_PROJECT_NAME,
    DEF_TOKEN_PREFIX,
    DEF_FILENAME_PREFIX,
    DEF_OUT_DIRECTORY,
    DEF_ASSET_OUT_DIRECTORY,
    DEF_FORMAT,
    DEF_LINK_COLOUR,
    DEF_LINK_COLOUR_HOVER,
    DEF_LINK_COLOUR_ACTIVE,
    DEF_LINK_COLOUR_VISITED,
    projectName,
    tokenPrefix,
    filenamePrefix,
    outDirectory,
    assetOutDirectory,
    fonts,
    format,
    linkColour,
    linkColourHover,
    linkColourActive,
    linkColourVisited,
}
