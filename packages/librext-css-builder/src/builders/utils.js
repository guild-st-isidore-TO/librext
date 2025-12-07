"use strict"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
const dataUiSpecDir = dataDir
const templatesDir = `${__dirname}/html`
const htmlOutputDir = `${__dirname}/../../docs`
const cssOutputDir = `${__dirname}/../../css`

const ROOT_SELECTOR = ':root'

const util = {
    writeCssVarRule,
    writeCssRule,
    dataDir,
    dataUiSpecDir,
    templatesDir,
    htmlOutputDir,
    cssOutputDir,
    ROOT_SELECTOR,
}

export default util
export {
    writeCssVarRule,
    writeCssRule,
    dataDir,
    dataUiSpecDir,
    templatesDir,
    htmlOutputDir,
    cssOutputDir,
    ROOT_SELECTOR,
}
