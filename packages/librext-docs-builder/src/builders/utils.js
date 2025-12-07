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

const util = {
    dataDir,
    dataUiSpecDir,
    templatesDir,
    htmlOutputDir,
    cssOutputDir,
}

export default util
export {
    dataDir,
    dataUiSpecDir,
    templatesDir,
    htmlOutputDir,
    cssOutputDir,
}
