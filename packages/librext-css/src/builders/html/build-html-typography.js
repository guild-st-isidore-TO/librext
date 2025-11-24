const ejs = require('ejs');
const libRextCssFileHandler = require('../file-handler')
const libRextCssUtil = require('../utils')

const buildHtmlTypography = () => {

    const fPath = `${libRextCssUtil.templatesDir}/typography.ejs`
    const template = libRextCssFileHandler.readTemplateFile(fPath);

    const templatePayload = {
        roles: [
            {
                spec: 'Heading 1',
                info: 'Font Size: 32px; Line Height: 40px; Font Weight: 700;'
            },
            {
                spec: 'Heading 2',
                info: 'Font Size: 28px; Line Height: 36px; Font Weight: 700;'
            }
        ],
    };
    const filledTemplate = ejs.render(template, templatePayload);
    // console.log(filledTemplate);

    const outfilePath = `${libRextCssUtil.htmlOutputDir}/typography.html`;
    libRextCssFileHandler.writeFile(outfilePath, filledTemplate);
}

module.exports = { build: buildHtmlTypography };
