"use strict"

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import libRextCssFileHandler from './file-handler.js'
import libRextCssUtil from './utils.js'

const buildLayout = () => {
    // console.log('[LibRext CSS - LayoutBuilder] uiSpec', uiSpec);

    let layoutContent = '';
    const styleVars = []

    for (const sectionLevel of layoutData.variables.sectionLevels) {
        // const scaleVal = layoutData.layoutScale[scaleKey]
        // const property
        console.log('[LibRext CSS - LayoutBuilder] sectionLevel', sectionLevel)
    }

    // layoutContent += libRextCssUtil.writeCssVarRule(libRextCssUtil.ROOT_SELECTOR, styleVars);

    // libRextCssFileHandler.writeFile(`${__dirname}/../../css/librext-layout.css`, layoutContent)
}

module.exports = { build: buildLayout };
