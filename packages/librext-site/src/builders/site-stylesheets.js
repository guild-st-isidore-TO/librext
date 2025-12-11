import { join } from 'path'
import { cpSync, copyFileSync } from 'fs';
import ejs from 'ejs';
import { fileHandler } from 'librext-core'

import { templatesDir, srcDir, projectRootDir } from '../site-builder-util.js'

/**
 * Builds stylesheets for LibRext site
 * @param {*} uiSpec 
 * @param {*} outputDir 
 * @param {*} config 
 * @returns true if everything suceeded, false if not
 */
const buildHtmlStylesheets = (uiSpec, outputDir, config) => {
    const buildSuccess = false
    // const fPath = `${templatesDir}/site-typography.ejs`
    // const template = fileHandler.readTemplateFile(fPath);

    // const fontKeySet = new Set(Object.values(config.fonts))
    // const fontKeyList = Array.from(fontKeySet)

    // // console.log('[LibRext CSS - Build HTML Typography] uiSpec', uiSpec);

    // const dataRoles = []
    // for (const dataRole in uiSpec.docRoles) {
    //     const docrole = uiSpec.docRoles[dataRole]
    //     const docRoleData = uiSpec.libRextData.docRoles[dataRole]
    //     dataRoles.push({
    //         name: dataRole,
    //         htmlTags: docRoleData.html.split(','),
    //         htmlClass: docRoleData.class,
    //         typescale: docRoleData.typescale,
    //         weight: docrole.weight,
    //         styles: JSON.stringify(docRoleData.styles),
    //         spec: 'The quick brown fox jumps over the lazy dog.',
    //     })
    // }

    // const templatePayload = {
    //     fonts: fontKeyList,
    //     roles: dataRoles,
    // };
    // const filledTemplate = ejs.render(template, templatePayload);

    // const outfilePath = `${outputDir}/typography.html`;
    // fileHandler.writeFile(outfilePath, filledTemplate);





    // Copy CSS from /src to the output
    const sourceFile = `${srcDir}/site-style.css`
    const targetDir = join(outputDir, 'css')
    const targetFile = `${targetDir}/site-style.css`

    console.log('[LibRext CSS - Site Stylesheets] sourceFile', sourceFile)
    console.log('[LibRext CSS - Site Stylesheets] targetDir', targetDir)
    console.log('[LibRext CSS - Site Stylesheets] targetFile', targetFile)

    try {
        // cpSync(sourceFile, targetDir, { recursive: true })
        copyFileSync(sourceFile, targetFile)
    } catch (err) {
        console.error('[LibRext CSS - Site Stylesheets] Stylesheet copying failed!')
        console.error(err)
        return false;
    }

    return buildSuccess
}

export default buildHtmlStylesheets