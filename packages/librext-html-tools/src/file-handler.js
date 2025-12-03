"use strict"

const fs = require('fs');

const readTemplateFile = (filePath) => {
    let returnData = {}
    console.log('[LibRext CSS - FileHandler.readTemplateFile] filePath', filePath)
    returnData = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' })
    return returnData
}

const readJsonFile = (filePath) => {
    let returnData = {}
    console.log('[LibRext CSS - FileHandler.readJsonFile] filePath', filePath)
    returnData = JSON.parse(fs.readFileSync(filePath))
    return returnData
}

const writeFile = (filePath, content) => {
    console.log('[LibRext CSS - FileHandler.writeFile] filePath', filePath)
    fs.writeFileSync(filePath, content);
}

module.exports = {
    readTemplateFile,
    readJsonFile,
    writeFile,
}
