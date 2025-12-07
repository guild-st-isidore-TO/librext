import ejs from 'ejs';
import libRextCssFileHandler from './file-handler.js'
import libRextDocsUtil from './utils.js'

const buildHtmlShapes = (uiSpec, outputDir) => {
    const fPath = `${libRextDocsUtil.templatesDir}/shapes.ejs`
    const template = libRextCssFileHandler.readTemplateFile(fPath);
    // console.log('[LibRext CSS - Build HTML Shapes] uiSpec', uiSpec);
    const cRadiusPrefixes = [
        'none',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
    ]

    const dataBorderRadSizes = []
    for (const cRadiusSize in uiSpec.radii) {
        const currentRadSize = uiSpec.radii[cRadiusSize];
        dataBorderRadSizes.push({
            sizeCode: cRadiusPrefixes[cRadiusSize],
            lenVar: currentRadSize,
        })
    }

    const dataBoxShadowSizes = []
    for (const bShadowSize in uiSpec.shadows) {
        const currentShadowSize = uiSpec.shadows[bShadowSize];
        dataBoxShadowSizes.push({
            sizeCode: bShadowSize,
            len: currentShadowSize.len,
            blur: currentShadowSize.blur,
        })
    }

    const dataWidgets = []
    for (const widgetSize in uiSpec.widgetHeights) {
        dataWidgets.push({
            sizeCode: widgetSize,
        })
    }

    const dataCards = []
    for (const cardSize in uiSpec.cards) {
        dataCards.push({
            sizeCode: cardSize,
            specText: 'Cras in lacus a dui tristique rutrum id sed.',
        })
    }

    const templatePayload = {
        borderRadiusSizes: dataBorderRadSizes,
        boxShadowSizes: dataBoxShadowSizes,
        widgetSizes: dataWidgets,
        cards: dataCards,
    };

    const output = ejs.render(template, templatePayload);
    const outfilePath = `${outputDir}/shapes.html`;
    libRextCssFileHandler.writeFile(outfilePath, output);
}

// module.exports = { build: buildHtmlShapes };
export default buildHtmlShapes