"use strict"

const writeCssVarRule = (selector, propList) => {
    let variablesContent = `${selector} {\n`;
    propList.forEach(sProp => {
        variablesContent += `  --${sProp.property}: ${sProp.value};\n`
    })
    variablesContent += `}\n`
    return variablesContent
}
const writeCssRule = (selector, propList) => {
    let variablesContent = `${selector} {\n`;
    propList.forEach(sProp => {
        variablesContent += `  ${sProp.property}: ${sProp.value};\n`
    })
    variablesContent += `}\n`
    return variablesContent
}

const dataDir = `${__dirname}/../data`

const fontCategories = [
    'serif',
    'sans',
    'monospace',
    'display',
]

/**
 * For our purposes, "regular" is the counterpart of "italic".
 */
const fontVariants = [
    'regular',
    'italic',
]

/**
 * For our purposes, "medium" is a font weight
 */
const fontWeights = [
    'bold',
    'medium',
    'light',
]

const fontData = {
    categories: fontCategories,
    variants: fontVariants,
    weights: fontWeights,
}

module.exports = {
    writeCssVarRule,
    writeCssRule,
    dataDir,
    fontData,
}
