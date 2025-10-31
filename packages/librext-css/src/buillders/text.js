"use strict"

const fs = require('node:fs');

let scope = 'global'
let defaultLocalScope = '.librext *'
let customLocalScope = '.placeholder *'

let selectorScope = ':root'

const buildText = () => {

    if (scope == 'local') {
        selectorScope = defaultLocalScope
    } else if (scope == 'custom') {
        selectorScope = customLocalScope
    }

    const styleVars = [
        { property: 'test-val-1', value: '#00ffff' },
        { property: 'test-val-2', value: '#ff00ff' },
        { property: 'test-val-3', value: '#ffff00' },
    ]

    let variablesContent = `${selectorScope} {\n`;
    styleVars.forEach(sVar => {
        variablesContent += `  --${sVar.property}: ${sVar.value};\n`
    })
    variablesContent += `}\n`

    fs.writeFile(`${__dirname}/../../css/librext-text.css`, variablesContent, err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
    });
}

module.exports = { build: buildText };
