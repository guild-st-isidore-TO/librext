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

const miscUtils = {
    getPermutationsOfArrays,
}

export default miscUtils
export {
    getPermutationsOfArrays,
}
