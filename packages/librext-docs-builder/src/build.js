import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import libRextCssBuilder from 'librext-css-builder'
import libRextUiSpec from 'librext-ui-spec'
import librextSpecBuilder from 'librext-spec-builder'
import libRextCore from 'librext-core'
import libRextDocsBuilder from './builders/index.js'

const outDir = `${__dirname}/../../../docs`
const config = {}

const uiSpec = librextSpecBuilder(libRextUiSpec, config)

libRextCssBuilder(uiSpec, outDir, config)

libRextDocsBuilder(uiSpec, outDir, config)
