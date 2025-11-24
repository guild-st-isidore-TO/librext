const ejs = require('ejs');

const libRextCssFileHandler = require('../file-handler')
const libRextCssUtil = require('../utils')

const buildHtmlColours = () => {
  const fPath = `${libRextCssUtil.templatesDir}/colours.ejs`
  const template = libRextCssFileHandler.readTemplateFile(fPath);
  // console.log('[LibRext CSS - Build HTML Colours] template', template);

  const templatePayload = {
    themePaletteLight: [
      {
        colour: '#1E90FF'
      },
      {
        colour: '#EDFF0A'
      },
      {
        colour: '#EC00FF'
      },
    ],
    themePaletteDark: [
      {
        colour: '#1E90FF'
      },
      {
        colour: '#EDFF0A'
      },
      {
        colour: '#EC00FF'
      },
            {
        colour: '#02a70c'
      },
    ],
    greyscalePaletteLight: [
      {
        colour: '#1E90FF'
      },
      {
        colour: '#EDFF0A'
      },
      {
        colour: '#EC00FF'
      },
            {
        colour: '#02a70c'
      },
    ],
    greyscalePaletteDark: [
      {
        colour: '#1E90FF'
      },
      {
        colour: '#EDFF0A'
      },
      {
        colour: '#EC00FF'
      },
            {
        colour: '#02a70c'
      },
    ],
    paletteDetailItems: [
      {
        colour: '#1E90FF',
        description: 'Sed pretium orci eros, quis feugiat'
      },
      {
        colour: '#EDFF0A',
        description: 'Sed pretium orci eros, quis feugiat'
      },
      {
        colour: '#EC00FF',
        description: 'Sed pretium orci eros, quis feugiat'
      },
      {
        colour: '#02a70c',
        description: 'Sed pretium orci eros, quis feugiat'
      },
    ],
    colourLayersLight: [
      {
        colour: '#1E90FF'
      },
      {
        colour: '#EDFF0A'
      },
      {
        colour: '#EC00FF'
      },
      {
        colour: '#02a70c'
      },
    ],
    colourLayersDark: [
      {
        colour: '#1E90FF'
      },
      {
        colour: '#EDFF0A'
      },
      {
        colour: '#EC00FF'
      },
      {
        colour: '#02a70c'
      },
    ],
  };

  const output = ejs.render(template, templatePayload);

  // console.log(output);

  const outfilePath = `${libRextCssUtil.htmlOutputDir}/colours.html`;
  libRextCssFileHandler.writeFile(outfilePath, output);

}

module.exports = { build: buildHtmlColours };