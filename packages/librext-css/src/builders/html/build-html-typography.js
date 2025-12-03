const ejs = require('ejs');
const libRextCssFileHandler = require('../file-handler')
const libRextCssUtil = require('../utils')
const { uiSpec } = require(libRextCssUtil.dataUiSpecDir)

const buildHtmlTypography = () => {
    const fPath = `${libRextCssUtil.templatesDir}/typography.ejs`
    const template = libRextCssFileHandler.readTemplateFile(fPath);
    // console.log('[LibRext CSS - Build HTML Typography] uiSpec', uiSpec);

    const dataRoles = textData.variables.docroles.map(docrole => {
        return {
            name: docrole.docrole,
            htmlTags: docrole.html.split(','),
            htmlClass: docrole.class,
            typescale: docrole.typescale,
            weight: docrole.weight,
            styles: JSON.stringify(docrole.styles),
            spec: 'The quick brown fox jumps over the lazy dog.',
        }
    })

    const templatePayload = {
        roles: dataRoles,
    };
    const filledTemplate = ejs.render(template, templatePayload);
    // console.log(filledTemplate);

    const outfilePath = `${libRextCssUtil.htmlOutputDir}/typography.html`;
    libRextCssFileHandler.writeFile(outfilePath, filledTemplate);
}

module.exports = { build: buildHtmlTypography };
