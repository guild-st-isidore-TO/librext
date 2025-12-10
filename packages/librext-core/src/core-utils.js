"use strict"

function cartesian(...args) {
    var r = [], max = args.length - 1;
    function helper(arr, i) {
        for (var j = 0, l = args[i].length; j < l; j++) {
            var a = arr.slice(0); // clone arr
            a.push(args[i][j]);
            if (i == max)
                r.push(a);
            else
                helper(a, i + 1);
        }
    }
    helper([], 0);
    return r;
}

const getPermutationsOfArrays = (array1, array2) => {
    var resultArray = cartesian(array1, array2)
    return resultArray
}

/**
 * Creates a code comment
 * @param {*} heading 
 * @param {*} body 
 * @param {string} lang coding language ['js', 'css', 'html']
 * @param {number} level decoration level
 * @param {number} spacingLevel spacing level
 * @returns code comment string
 */
const codeComment = (heading, body, lang = 'js', level = 0, spacingLevel = 0) => {
    let outComment = ''

    // syntax for JS, CSS
    let delimOpen = '/* '
    let delimMid = ' * '
    let delimClose = ' */'

    if (lang == 'html') {
        // syntax for HTML
        delimOpen = '<!--'
        delimMid = '   '
        delimClose = '-->'
    }

    let borderTopChar = '-'
    let borderBottomChar = '-'
    let hrChar = '-'
    let lineLength = 40 + (level * 4);

    if (level == 1) {
        borderTopChar = '='
    } else if (level == 2) {
        borderTopChar = '='
        borderBottomChar = '='
    } else if (level == 3) {
        borderTopChar = '/'
        borderBottomChar = '/'
    } else if (level == 4) {
        borderTopChar = '#'
        borderBottomChar = '#'
    }

    let borderTopLine = ''
    let borderBottomLine = ''
    let hrLine = ''

    for (let idx = 0; idx < lineLength; idx++) {
        borderTopLine += borderTopChar
        hrLine += hrChar
        if (idx < lineLength - delimClose.length) {
            borderBottomLine += borderBottomChar
        }
    }

    const sLevel = spacingLevel > 4 ? 4 : spacingLevel
    const spaceLines = sLevel
    let spaceText = ''
    for (let idx = 0; idx < spaceLines; idx++) {
        spaceText += '\n'
    }

    outComment += spaceText + '\n'
    outComment += delimOpen + borderTopLine + '\n'

    outComment += delimMid + heading + '\n'

    outComment += delimMid + hrLine + '\n'

    outComment += delimMid + body + '\n'

    outComment += delimMid + borderBottomLine + delimClose + '\n'
    outComment += spaceText

    return outComment
}

const miscUtils = {
    getPermutationsOfArrays,
    codeComment,
}

export default miscUtils
export {
    getPermutationsOfArrays,
    codeComment,
}
