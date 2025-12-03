const ejs = require('ejs');
const libRextCssFileHandler = require('../file-handler')
const libRextCssUtil = require('../utils')
const uiSpec = require(libRextCssUtil.dataUiSpecDir)

const buildHtmlShapes = () => {
    const fPath = `${libRextCssUtil.templatesDir}/shapes.ejs`
    const template = libRextCssFileHandler.readTemplateFile(fPath);
    // console.log('[LibRext CSS - Build HTML Shapes] uiSpec', uiSpec);

    const dataBorderRadSizes = []
    for (const cRadiusSize in shapesData.definitions.cornerRadiusScale) {
        const currentRadSize = shapesData.definitions.cornerRadiusScale[cRadiusSize];
        dataBorderRadSizes.push({
            sizeCode: cRadiusSize,
            lenVar: currentRadSize,
        })
    }

    const dataElementHeightSizes = []

    const dataBoxShadowSizes = []
    for (const bShadowSize in shapesData.definitions.boxShadowScale) {
        const currentShadowSize = shapesData.definitions.boxShadowScale[bShadowSize];
        dataBoxShadowSizes.push({
            sizeCode: bShadowSize,
            len: currentShadowSize.len,
            blur: currentShadowSize.blur,
        })
    }

    const dataWidgetSizes = []

    const cardDefinitions = shapesData.variables.shapeDefinitions.filter(shapeDef => shapeDef.name.startsWith('card'))
    const dataCards = cardDefinitions.map(shapeDef => {
        const nameParts = shapeDef.name.split('.')
        const sizeSuffix = nameParts[1]
        return {
            sizeCode: sizeSuffix,
            specText: 'Cras in lacus a dui tristique rutrum id sed.',
            name: shapeDef.name,
            height: shapeDef.height,
            background: shapeDef.background,
            padding: shapeDef.padding,
            boxShadow: shapeDef.boxShadow,
            cornerRadius: shapeDef.cornerRadius,
        }
    })

    const templatePayload = {
        borderRadiusSizes: dataBorderRadSizes,
        boxShadowSizes: dataBoxShadowSizes,
        widgetSizes: [],
        cards: dataCards,
    };

    const output = ejs.render(template, templatePayload);

    // console.log(output);
    const outfilePath = `${libRextCssUtil.htmlOutputDir}/shapes.html`;
    libRextCssFileHandler.writeFile(outfilePath, output);
}

module.exports = { build: buildHtmlShapes };