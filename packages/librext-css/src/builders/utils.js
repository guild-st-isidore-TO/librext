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

/**
 * The LibRext type system roles, organized with: display, title, label, heading, body.
 * Heading text will be categorized in body here
 * 
 * @see https://m3.material.io/styles/typography/applying-type The Material 3 type scale organizes styles into five roles that are named to
 * describe their purposes: display, headline, title, label, body.
 * Each role has three sizes: large, medium, and small.
 * These roles and sizes create clear page hierarchy and work across many devices.
 */

const fontRoles = ['display', 'title', 'label', 'heading', 'body']

/**
 * Data about fonts
 */
const fontData = {
    categories: fontCategories,
    variants: fontVariants,
    weights: fontWeights,
    roles: fontRoles,
}

module.exports = {
    writeCssVarRule,
    writeCssRule,
    dataDir,
    fontData,
}
