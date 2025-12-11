import ejs from 'ejs';
import { fileHandler } from 'librext-core'
import { templatesDir, colourLabelModes } from '../site-builder-util.js'

const docHome = (uiSpec, outputDir, config) => {
  const fPath = `${templatesDir}/site-home.ejs`
  const template = fileHandler.readTemplateFile(fPath);
  const fontKeySet = new Set(Object.values(config.fonts))
  const fontKeyList = Array.from(fontKeySet)
  // console.log('[LibRext CSS - Build HTML Home] uiSpec', uiSpec);
  const cRadiusPrefixes = [
    'none',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
  ]

  const dataBorderRadSizes = []
  for (const cRadiusSize in uiSpec.radii) {
    const currentRadSize = uiSpec.radii[cRadiusSize];
    dataBorderRadSizes.push({
      sizeCode: cRadiusPrefixes[cRadiusSize],
      lenVar: currentRadSize,
      heading: cRadiusPrefixes[cRadiusSize],
      body: currentRadSize,
    })
  }

  const dataBoxShadowSizes = []
  for (const bShadowSize in uiSpec.shadows) {
    const currentShadowSize = uiSpec.shadows[bShadowSize];
    dataBoxShadowSizes.push({
      sizeCode: bShadowSize,
      heading: bShadowSize,
      body: currentShadowSize,
    })
  }

  const librextGreyscale = uiSpec.libRextData.palette.grey
  const librextTheme = uiSpec.libRextData.palette.theme

  const dataGreyscaleLight = librextGreyscale.map((greyCol, idx) => {
    return {
      colour: greyCol,
      heading: `grey${idx}`,
      body: greyCol,
      labelMode: colourLabelModes[`grey${idx}`],
    }
  })
  const dataThemeLight = []
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

  const templatePayload = {
    fonts: fontKeyList,
    borderRadiusSizes: dataBorderRadSizes,
    boxShadowSizes: dataBoxShadowSizes,
    greyscalePaletteLight: dataGreyscaleLight,
    themePaletteDark: dataThemeDark,
  };

  const output = ejs.render(template, templatePayload);

  const outfilePath = `${outputDir}/index.html`;
  fileHandler.writeFile(outfilePath, output);
}

export default docHome