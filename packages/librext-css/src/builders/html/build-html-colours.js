const ejs = require('ejs');

const libRextCssFileHandler = require('../file-handler')
const libRextCssUtil = require('../utils')

const buildHtmlColours = () => {
  const fPath = `${libRextCssUtil.templatesDir}/colours.ejs`
  const template = libRextCssFileHandler.readTemplateFile(fPath);
  // console.log('[LibRext CSS - Build HTML Colours] template', template);

  const coloursDataFile = `${libRextCssUtil.dataDir}/colours.json`
  const coloursData = libRextCssFileHandler.readJsonFile(coloursDataFile)

  const dataThemeLight = []
  const dataPaletteItems = []
  for (const themeColName in coloursData.variables.palette.theme) {
    currentThemeCol = coloursData.variables.palette.theme[themeColName]
    dataThemeLight.push({
      colour: currentThemeCol,
    })
    dataPaletteItems.push({
      colour: currentThemeCol,
      description: 'Sed pretium orci eros, quis feugiat'
    })
  }

  const dataThemeDark = dataThemeLight

  const dataGreyscaleLight = coloursData.variables.palette.grey.map(greyCol => {
    return {
      colour: greyCol,
    }
  })

  const dataGreyscaleDark = dataGreyscaleLight


  const dataCollayersLight = [
    dataGreyscaleLight[2],
    dataGreyscaleLight[1],
    dataGreyscaleLight[2],
    dataGreyscaleLight[1],
  ]

  const dataColLayersDark = [
    dataGreyscaleLight[10],
    dataGreyscaleLight[9],
    dataGreyscaleLight[10],
    dataGreyscaleLight[9],
  ]

  const templatePayload = {
    themePaletteLight: dataThemeLight,
    themePaletteDark: dataThemeDark,
    greyscalePaletteLight: dataGreyscaleLight,
    greyscalePaletteDark: dataGreyscaleDark,
    paletteDetailItems: dataPaletteItems,
    colourLayersLight: dataCollayersLight,
    colourLayersDark: dataColLayersDark,
  };
  console.log(templatePayload);

  const output = ejs.render(template, templatePayload);

  // console.log(output);

  const outfilePath = `${libRextCssUtil.htmlOutputDir}/colours.html`;
  libRextCssFileHandler.writeFile(outfilePath, output);

}

module.exports = { build: buildHtmlColours };