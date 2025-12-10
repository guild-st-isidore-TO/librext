"use strict"

import typeScaleData from './data/type-scales.json' with { type: 'json' };
import presetData from './data/presets.json' with { type: 'json' };

const defaultTypeScaleFactor = presetData.defaults.typeScaleFactor
const defaultTypeScaleRatio = presetData.defaults.typeScaleRatio

const buildBaseTypeScale = (
    config,
    typeScaleFactor = defaultTypeScaleFactor,
    typeScaleRatio = defaultTypeScaleRatio,
) => {
    console.log('[LibRext Spec Builder] config', config)
    console.log('[LibRext Spec Builder] typeScaleData', typeScaleData)
    console.log('[LibRext Spec Builder] presetData', presetData)
    let outScale = []
    
    console.log('[LibRext Spec Builder] typeScaleFactor', typeScaleFactor)
    console.log('[LibRext Spec Builder] typeScaleRatio', typeScaleRatio)
    const baseTypeScale = typeScaleData[typeScaleRatio]
    const scaleFactor = presetData.typeScaleFactor[typeScaleFactor]
    
    console.log('[LibRext Spec Builder] baseTypeScale', baseTypeScale)
    
    outScale = baseTypeScale.map(scaleVal => scaleVal * scaleFactor)
    outScale.sort((x, y) => x - y);
    console.log('[LibRext Spec Builder] outScale', outScale)

    return outScale
}

const buildTypeScale = (
    config,
    typeScaleFactor,
    typeScaleRatio,
) => {
    const bScale = buildBaseTypeScale(config, typeScaleFactor, typeScaleRatio)

    return bScale.map(scaleItem => `${scaleItem}rem`)
}

const buildTypeScaleData = (
    config,
    typeScaleFactor,
    typeScaleRatio,
) => {
    const bScale = buildBaseTypeScale(config, typeScaleFactor, typeScaleRatio)
    let outScale = {}
    presetData.typeScaleLevels.forEach((scaleLevel, idx) => {
        outScale[scaleLevel] = `${bScale[idx]}rem`
    })

    return outScale
}

export {
    buildBaseTypeScale,
    buildTypeScale,
    buildTypeScaleData,
}
