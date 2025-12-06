import ejs from 'ejs';
import libRextCssFileHandler from './file-handler.js'
import libRextCssUtil from './utils.js'

const buildHtmlTypography = (uiSpec, outputDir) => {
    const fPath = `${libRextCssUtil.templatesDir}/typography.ejs`
    const template = libRextCssFileHandler.readTemplateFile(fPath);
    // console.log('[LibRext CSS - Build HTML Typography] uiSpec', uiSpec);

    const dataRoles = []
    for (const dataRole in uiSpec.docRoles) {
        const docrole = uiSpec.docRoles[dataRole]
        const docRoleData = uiSpec.libRextData.docRoles[dataRole]
        dataRoles.push({
            name: dataRole,
            htmlTags: docRoleData.html.split(','),
            htmlClass: docRoleData.class,
            typescale: docRoleData.typescale,
            weight: docrole.weight,
            styles: JSON.stringify(docRoleData.styles),
            spec: 'The quick brown fox jumps over the lazy dog.',
        })
    }

    const templatePayload = {
        roles: dataRoles,
    };
    const filledTemplate = ejs.render(template, templatePayload);

    const outfilePath = `${outputDir}/typography.html`;
    libRextCssFileHandler.writeFile(outfilePath, filledTemplate);
}

// module.exports = { build: buildHtmlTypography };
export default buildHtmlTypography