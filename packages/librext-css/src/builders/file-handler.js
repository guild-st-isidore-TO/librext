"use strict"

const fs = require('fs');

const readFile = (filePath) => {
    let returnData = {}
    console.log('[LibRext CSS - FileHandler.readFile] filePath', filePath)
    returnData = JSON.parse(fs.readFileSync(filePath))
    // console.log('[LibRext CSS - FileHandler.readFile] returnData', returnData)
    return returnData
}

const writeFile = (filePath, content) => {
    console.log('[LibRext CSS - FileHandler.writeFile] filePath', filePath)
    fs.writeFileSync(filePath, content);
}

module.exports = {
    readFile,
    writeFile,
}
