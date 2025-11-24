const ejs = require('ejs');

const libRextCssFileHandler = require('../file-handler')
const libRextCssUtil = require('../utils')

const fPath = `${libRextCssUtil.templatesDir}/shapes.ejs`
const template = libRextCssFileHandler.readTemplateFile(fPath);

const templatePayload = {
    name: 'John',
    date: new Date().toISOString().split('T')[0]
};

const output = ejs.render(template, templatePayload);

console.log(output);