import ejs from 'ejs';
import libRextCssFileHandler from './file-handler.js'
import libRextCssUtil from './utils.js'

const buildHtmlColours = (uiSpec, outputDir) => {
  const fPath = `${libRextCssUtil.templatesDir}/colours.ejs`
  const template = libRextCssFileHandler.readTemplateFile(fPath);
  // console.log('[LibRext CSS - Build HTML Colours] uiSpec', uiSpec);

  const dataThemeLight = []
  const dataPaletteItems = []
  for (const themeColName in librextTheme) {
    currentThemeCol = librextTheme[themeColName]
    dataThemeLight.push({
      colour: currentThemeCol,
    })
    dataPaletteItems.push({
      colour: currentThemeCol,
      description: 'Sed pretium orci eros, quis feugiat'
    })
  }

  const dataThemeDark = dataThemeLight

  const dataGreyscaleLight = librextGreyscale.map(greyCol => {
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
  // console.log(templatePayload);

  const output = ejs.render(template, templatePayload);

  // console.log(output);

  const outfilePath = `${outputDir}/colours.html`;
  libRextCssFileHandler.writeFile(outfilePath, output);

}

// module.exports = { build: buildHtmlColours };
export default buildHtmlColours