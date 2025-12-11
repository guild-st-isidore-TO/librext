import ejs from 'ejs';
import { fileHandler } from 'librext-core'
import { templatesDir } from '../docs-builder-util.js'

const buildHtmlTypography = (uiSpec, outputDir, config) => {
    const fPath = `${templatesDir}/typography.ejs`
    const template = fileHandler.readTemplateFile(fPath);
    const fontKeySet = new Set(Object.values(config.fonts))
    const fontKeyList = Array.from(fontKeySet)
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
        fonts: fontKeyList,
        roles: dataRoles,
    };
    const filledTemplate = ejs.render(template, templatePayload);

    const outfilePath = `${outputDir}/typography.html`;
    fileHandler.writeFile(outfilePath, filledTemplate);
}

// module.exports = { build: buildHtmlTypography };
export default buildHtmlTypography