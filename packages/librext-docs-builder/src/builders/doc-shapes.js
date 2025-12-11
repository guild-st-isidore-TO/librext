import ejs from 'ejs';
import { fileHandler } from 'librext-core'
import { templatesDir } from '../docs-builder-util.js'

const docShapes = (uiSpec, outputDir, config) => {
    const fPath = `${templatesDir}/shapes.ejs`
    const template = fileHandler.readTemplateFile(fPath);
    const fontKeySet = new Set(Object.values(config.fonts))
    const fontKeyList = Array.from(fontKeySet)
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
            heading: cRadiusPrefixes[cRadiusSize],
            body: currentRadSize,
        })
    }

    const dataBoxShadowSizes = []
    for (const bShadowSize in uiSpec.shadows) {
        const currentShadowSize = uiSpec.shadows[bShadowSize];
        // console.log(currentShadowSize)
        // console.log('[LibRext CSS - Build HTML Shapes] bShadowSize', bShadowSize);
        // console.log('[LibRext CSS - Build HTML Shapes] currentShadowSize', currentShadowSize);
        dataBoxShadowSizes.push({
            sizeCode: bShadowSize,
            heading: bShadowSize,
            body: currentShadowSize,
        })
    }

    const dataWidgets = []
    for (const widgetSize in uiSpec.widgetHeights) {
        const currentWidgetSize = uiSpec.widgetHeights[widgetSize]
        // console.log('[LibRext CSS - Build HTML Shapes] currentWidgetSize', currentWidgetSize);
        dataWidgets.push({
            sizeCode: widgetSize,
            heading: widgetSize,
            body: currentWidgetSize.height,
        })
    }

    const dataCards = []
    for (const cardSize in uiSpec.cards) {
        dataCards.push({
            sizeCode: cardSize,
            specText: 'Cras in lacus a dui tristique rutrum id sed.',
            heading: 'testy',
            body: 'testy',
        })
    }

    const templatePayload = {
        fonts: fontKeyList,
        borderRadiusSizes: dataBorderRadSizes,
        boxShadowSizes: dataBoxShadowSizes,
        widgetSizes: dataWidgets,
        cards: dataCards,
    };

    const output = ejs.render(template, templatePayload);
    const outfilePath = `${outputDir}/shapes.html`;
    fileHandler.writeFile(outfilePath, output);
}

// module.exports = { build: buildHtmlShapes };
export default docShapes