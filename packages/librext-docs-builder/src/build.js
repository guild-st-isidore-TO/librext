import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import libRextCssBuilder from 'librext-css-builder'
import libRextUiSpec from 'librext-ui-spec'
import libRextDocsBuilder from './builders/index.js'

const outDir = `${__dirname}/../../../docs`

libRextCssBuilder(libRextUiSpec, outDir)

libRextDocsBuilder(libRextUiSpec, outDir)
