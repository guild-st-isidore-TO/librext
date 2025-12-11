import { join } from 'path'
import { cpSync, copyFileSync, readFileSync, writeFileSync } from 'fs';
import ejs from 'ejs';
import { fileHandler } from 'librext-core'

import { templatesDir, srcDir, projectRootDir } from '../docs-builder-util.js'

/**
 * Builds stylesheets for LibRext site
 * @param {*} uiSpec 
 * @param {*} outputDir 
 * @param {*} config 
 * @returns true if everything suceeded, false if not
 */
const docStylesheets = (uiSpec, outputDir, config) => {
    const buildSuccess = false

    // Copy CSS from /src to the output
    const sourceFile = `${srcDir}/docs-style.css`
    const targetDir = join(outputDir, 'css')
    const targetFile = `${targetDir}/docs-style.css`



    console.log('[LibRext CSS - Docs Stylesheets] sourceFile', sourceFile)
    console.log('[LibRext CSS - Docs Stylesheets] targetDir', targetDir)
    console.log('[LibRext CSS - Docs Stylesheets] targetFile', targetFile)

    try {
        // cpSync(sourceFile, targetDir, { recursive: true })
        // copyFileSync(sourceFile, targetFile)

        const baseStylesheet = readFileSync(sourceFile, { encoding: 'utf8' });
        const outStylesheet = baseStylesheet.replaceAll('lbrxt-', `${config.tokenPrefix}-`)
        writeFileSync(targetFile, outStylesheet);
    } catch (err) {
        console.error('[LibRext CSS - Docs Stylesheets] Stylesheet copying failed!')
        console.error(err)
        return false;
    }

    return buildSuccess
}

export default docStylesheets