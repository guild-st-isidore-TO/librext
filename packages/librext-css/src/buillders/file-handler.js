"use strict"

const fs = require('fs');

const readFile = (filePath) => {
    console.log('[LibRext CSS - FileHandler.readFile] filePath', filePath)
    fs.readFile('books.json', function (err, data) {

        if (err) throw err;

        const books = JSON.parse(data);
        console.log(books);
    })
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
