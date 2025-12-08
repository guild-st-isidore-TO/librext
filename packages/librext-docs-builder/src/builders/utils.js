"use strict"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataDir = `${__dirname}/../data`
const dataUiSpecDir = dataDir
const templatesDir = `${__dirname}`
const htmlOutputDir = `${__dirname}/../../docs`
const cssOutputDir = `${__dirname}/../../css`

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

const util = {
    dataDir,
    dataUiSpecDir,
    templatesDir,
    htmlOutputDir,
    cssOutputDir,
    colourLabelModes,
}

export default util
export {
    dataDir,
    dataUiSpecDir,
    templatesDir,
    htmlOutputDir,
    cssOutputDir,
    colourLabelModes,
}
