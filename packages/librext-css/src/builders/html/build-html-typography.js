const ejs = require('ejs');
const libRextCssFileHandler = require('../file-handler')
const libRextCssUtil = require('../utils')
const { uiSpec } = require(libRextCssUtil.dataUiSpecDir)

const buildHtmlTypography = () => {
    const fPath = `${libRextCssUtil.templatesDir}/typography.ejs`
    const template = libRextCssFileHandler.readTemplateFile(fPath);
    // console.log('[LibRext CSS - Build HTML Typography] uiSpec', uiSpec);

    // const dataRoles = textData.variables.docroles.map(docrole => {
    const dataRoles = []
    for (const dataRole in uiSpec.docRoles) {
        const docrole = uiSpec.docRoles[dataRole]
        return {
            name: docrole.libRextData.name,
            htmlTags: docrole.libRextData.html.split(','),
            htmlClass: docrole.libRextData.class,
            typescale: docrole.libRextData.typescale,
            weight: docrole.weight,
            styles: JSON.stringify(docrole.libRextData.styles),
            spec: 'The quick brown fox jumps over the lazy dog.',
        }
    }

    const templatePayload = {
        roles: dataRoles,
    };
    const filledTemplate = ejs.render(template, templatePayload);
    // console.log(filledTemplate);

    const outfilePath = `${libRextCssUtil.htmlOutputDir}/typography.html`;
    libRextCssFileHandler.writeFile(outfilePath, filledTemplate);
}

module.exports = { build: buildHtmlTypography };
