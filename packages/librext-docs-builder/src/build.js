import libRextCssBuilder from 'librext-css-builder'
import libRextUiSpec from 'librext-ui-spec'
import libRextDocsBuilder from './builders'

const outDir = `${__dirname}/../../../docs`

libRextCssBuilder(outDir, libRextUiSpec)

libRextDocsBuilder(outDir, libRextUiSpec)
