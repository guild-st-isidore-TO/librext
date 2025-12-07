import ejs from 'ejs';
import libRextDocsFileHandler from './file-handler.js'
import libRextDocsUtil from './utils.js'

// const { librextGreyscale, librextTheme } = require(`${libRextCssUtil.dataUiSpecDir}/spec-colours`)

const buildHtmlColours = (uiSpec, outputDir) => {
  const fPath = `${libRextDocsUtil.templatesDir}/colours.ejs`
  const template = libRextDocsFileHandler.readTemplateFile(fPath);
  // console.log('[LibRext CSS - Build HTML Colours] uiSpec', uiSpec);

  const librextGreyscale = uiSpec.libRextData.palette.grey
  const librextTheme = uiSpec.libRextData.palette.theme

  const dataThemeLight = []
  const dataPaletteItems = []
  for (const themeColName in librextTheme) {
    const currentThemeCol = librextTheme[themeColName]
    // const currentThemeData = librextTheme[themeColName]

    dataThemeLight.push({
      colour: currentThemeCol,
      heading: 'testy',
      body: 'testy',
    })
    // dataPaletteItems.push({
    //   colour: currentThemeCol,
    //   description: 'Sed pretium orci eros, quis feugiat'
    // })
  }

  const dataThemeDark = dataThemeLight

  const dataGreyscaleLight = librextGreyscale.map(greyCol => {
    return {
      colour: greyCol,
      heading: 'testy',
      body: 'testy',
    }
  })

  const dataGreyscaleDark = dataGreyscaleLight

  for (const colRole in uiSpec.libRextData.colourRoles) {
    const currentColRole = uiSpec.libRextData.colourRoles[colRole]
    const currentColLight = uiSpec.colors[colRole]
    const currentColDark = uiSpec.colors.modes.dark[colRole]

    dataPaletteItems.push({
      title: currentColRole.roleName,
      colour: currentColRole.colName,
      description: currentColRole.desc,
      valueLight: currentColLight,
      valueDark: currentColDark,
      heading: 'testy',
      body: 'testy',
    })
  }

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
  libRextDocsFileHandler.writeFile(outfilePath, output);

}

// module.exports = { build: buildHtmlColours };
export default buildHtmlColours