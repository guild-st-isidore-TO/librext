import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import libRextUiSpec from 'librext-ui-spec'
import librextSpecBuilder from 'librext-spec-builder'
import libRextCssBuilder from './builders/index.js'

const outDir = `${__dirname}/../../../docs`

const uiSpec = librextSpecBuilder(libRextUiSpec)

libRextCssBuilder(uiSpec, outDir)