"use strict"

const fs = require('fs');

const readFile = (filePath) => {
    let books = null
    console.log('[LibRext CSS - FileHandler.readFile] filePath', filePath)
    fs.readFile(filePath, function (err, data) {

        if (err) throw err;

        books = JSON.parse(data);
        console.log(books);
    })
    return books
}

const writeFile = (filePath, content) => {
    console.log('[LibRext CSS - FileHandler.writeFile] filePath', filePath)
    fs.writeFile(filePath, content, err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
    });
}

module.exports = {
    readFile,
    writeFile,
}
