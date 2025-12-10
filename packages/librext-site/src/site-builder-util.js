"use strict"

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDir = __dirname;
const projectRootDir = join(srcDir, '..')
const templatesDir = join(srcDir, 'templates')

const colourLabelModes = {
    grey0: 'light',
    grey1: 'light',
    grey2: 'light',
    grey3: 'light',
    grey4: 'light',
    grey5: 'light',
    grey6: 'dark',
    grey7: 'dark',
    grey8: 'dark',
    grey9: 'dark',
    grey10: 'dark',
    grey11: 'dark',
    rubricRed: 'dark',
    okGreen: 'light',
    warnYellow: 'light',
    errorRed: 'light',
    infoBlue: 'light',
    forestGreen: 'dark',
    rustBrown: 'dark',
    darkWine: 'dark',
    blueSlate: 'dark',
    text: 'dark',
    textDark: 'light',
    textRubric: 'dark',
    textRubricDark: 'dark',
    background: 'light',
    backgroundDark: 'dark',
    primary: 'dark',
    primaryDark: 'dark',
    secondary: 'dark',
    secondaryDark: 'dark',
    tertiary: 'dark',
    tertiaryDark: 'dark',
    indicatorOk: 'light',
    indicatorOkDark: 'light',
    indicatorWarn: 'light',
    indicatorWarnDark: 'light',
    indicatorError: 'light',
    indicatorErrorDark: 'light',
    indicatorInfo: 'light',
    indicatorInfoDark: 'light',
    indicatorNull: 'light',
    indicatorNullDark: 'light'
}

const docsBuilderUtil = {
    srcDir,
    projectRootDir,
    templatesDir,
    colourLabelModes,
}

export default docsBuilderUtil
export {
    srcDir,
    projectRootDir,
    templatesDir,
    colourLabelModes,
}
