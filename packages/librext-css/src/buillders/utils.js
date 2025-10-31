"use strict"

const writeCssVarRule = (selector, propList) => {
    let variablesContent = `${selector} {\n`;
    propList.forEach(sProp => {
        variablesContent += `  --${sProp.property}: ${sProp.value};\n`
    })
    variablesContent += `}\n`
    return variablesContent
}
const writeCssRule = (selector, propList) => {
    let variablesContent = `${selector} {\n`;
    propList.forEach(sProp => {
        variablesContent += `  ${sProp.property}: ${sProp.value};\n`
    })
    variablesContent += `}\n`
    return variablesContent
}

module.exports = {
    writeCssVarRule,
    writeCssRule,
}
