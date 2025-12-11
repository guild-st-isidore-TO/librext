import ejs from 'ejs';
import { fileHandler } from 'librext-core'
import { templatesDir, colourLabelModes } from '../docs-builder-util.js'

// const { librextGreyscale, librextTheme } = require(`${libRextCssUtil.dataUiSpecDir}/spec-colours`)

const docColours = (uiSpec, outputDir, config) => {
  const fPath = `${templatesDir}/colours.ejs`
  const template = fileHandler.readTemplateFile(fPath);
  const fontKeySet = new Set(Object.values(config.fonts))
  const fontKeyList = Array.from(fontKeySet)
  // console.log('[LibRext CSS - Build HTML Colours] uiSpec', uiSpec);

  // TODO - read these from configs!!
  const librextGreyscale = uiSpec.libRextData.palette.grey
  const librextTheme = uiSpec.libRextData.palette.theme

  const dataThemeLight = []
  const dataPaletteItems = []
  for (const themeColName in librextTheme) {
    const currentThemeCol = librextTheme[themeColName]
    dataThemeLight.push({
      colour: currentThemeCol,
      heading: themeColName,
      body: currentThemeCol,
      labelMode: colourLabelModes[themeColName],
    })
  }

  const dataThemeDark = dataThemeLight

  const dataGreyscaleLight = librextGreyscale.map((greyCol, idx) => {
    return {
      colour: greyCol,
      heading: `grey${idx}`,
      body: greyCol,
      labelMode: colourLabelModes[`grey${idx}`],
    }
  })

  const dataGreyscaleDark = dataGreyscaleLight

  for (const colRole in uiSpec.libRextData.colourRoles) {
    const currentColRole = uiSpec.libRextData.colourRoles[colRole]
    const currentColLight = uiSpec.colors[colRole]
    const currentColDark = uiSpec.colors.modes.dark[colRole]

    dataPaletteItems.push({
      title: currentColRole.roleName,
      colour: colRole,
      description: currentColRole.desc,
      valueLight: currentColLight,
      hslLight: '—',
      labelModeLight: colourLabelModes[colRole],
      valueDark: currentColDark,
      hslDark: '—',
      labelModeDark: colourLabelModes[`${colRole}Dark`],
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
    projectName: config.projectName,
    tokenPrefix: config.tokenPrefix,
    filenamePrefix: config.filenamePrefix,
    fonts: fontKeyList,
    themePaletteLight: dataThemeLight,
    themePaletteDark: dataThemeDark,
    greyscalePaletteLight: dataGreyscaleLight,
    greyscalePaletteDark: dataGreyscaleDark,
    paletteDetailItems: dataPaletteItems,
    colourLayersLight: dataCollayersLight,
    colourLayersDark: dataColLayersDark,
  };
  // console.log('[LibRext CSS - Build HTML Colours] templatePayload', templatePayload);

  const output = ejs.render(template, templatePayload);

  // console.log(output);

  const outfilePath = `${outputDir}/colours.html`;
  fileHandler.writeFile(outfilePath, output);

}

export default docColours