const ejs = require('ejs');

const libRextCssFileHandler = require('../file-handler')
const libRextCssUtil = require('../utils')

const fPath = `${libRextCssUtil.templatesDir}/colours.ejs`
const template = libRextCssFileHandler.readTemplateFile(fPath);
// console.log('[LibRext CSS - Build HTML Colours] template', template);

const templatePayload = {
  name: 'John',
  date: new Date().toISOString().split('T')[0],
  data: {
    colours: [
      { name: 'Red', hex: '#FF0000' },
      { name: 'Green', hex: '#00FF00' },
      { name: 'Blue', hex: '#0000FF' },
    ]
  },
};

const output = ejs.render(template, templatePayload);

console.log(output);