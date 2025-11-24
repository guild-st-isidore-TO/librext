const ejs = require('ejs');
const libRextCssFileHandler = require('../file-handler')
const libRextCssUtil = require('../utils')

const buildHtmlTypography = () => {

    const fPath = `${libRextCssUtil.templatesDir}/typography.ejs`
    const template = libRextCssFileHandler.readTemplateFile(fPath);

    const textDataFile = `${libRextCssUtil.dataDir}/text.json`
    const textData = libRextCssFileHandler.readJsonFile(textDataFile)

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

    // const outRoles = dataRoles.map(role => {
    //     let infoString = `${role.name}<br/>`
    //     infoString += `Weight: ${role.weight}<br/>`
    //     infoString += `Typescale: ${role.typescale}<br/>`
    //     infoString += `HTML Tags: ${role.htmlTags}<br/>`
    //     infoString += `CSS Class: ${role.htmlClass}<br/>`
    //     return {
    //         spec: 'Vivamus semper facilisis massa sit',
    //         info: infoString
    //     }
    // })

    const templatePayload = {
        roles: dataRoles,
    };
    const filledTemplate = ejs.render(template, templatePayload);
    // console.log(filledTemplate);

    const outfilePath = `${libRextCssUtil.htmlOutputDir}/typography.html`;
    libRextCssFileHandler.writeFile(outfilePath, filledTemplate);
}

module.exports = { build: buildHtmlTypography };
