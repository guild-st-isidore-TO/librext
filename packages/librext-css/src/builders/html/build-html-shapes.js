const ejs = require('ejs');

const libRextCssFileHandler = require('../file-handler')
const libRextCssUtil = require('../utils')


const buildHtmlShapes = () => {
    const fPath = `${libRextCssUtil.templatesDir}/shapes.ejs`
    const template = libRextCssFileHandler.readTemplateFile(fPath);

    const templatePayload = {
        borderRadiusSizes: [
            {
                sizeCode: 'sm',
            },
            {
                sizeCode: 'md',
            },
            {
                sizeCode: 'lg',
            },
        ],
        boxShadowSizes: [
            {
                sizeCode: 'sm',
            },
            {
                sizeCode: 'md',
            },
            {
                sizeCode: 'lg',
            },
        ],
        widgetSizes: [
            {
                sizeCode: 'sm',
            },
            {
                sizeCode: 'md',
            },
            {
                sizeCode: 'lg',
            },
        ],
        cards: [
            {
                sizeCode: 'sm',
                specText: 'Cras in lacus a dui tristique rutrum id sed.',
            },
            {
                sizeCode: 'md',
                specText: 'Cras in lacus a dui tristique rutrum id sed.',
            },
            {
                sizeCode: 'lg',
                specText: 'Cras in lacus a dui tristique rutrum id sed.',
            },
        ],
    };

    const output = ejs.render(template, templatePayload);

    // console.log(output);
    const outfilePath = `${libRextCssUtil.htmlOutputDir}/shapes.html`;
    libRextCssFileHandler.writeFile(outfilePath, output);
}

module.exports = { build: buildHtmlShapes };