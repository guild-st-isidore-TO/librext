"use strict"

const capitalizeFirstLetter = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const util = {
    capitalizeFirstLetter
}

export default util
export {
    capitalizeFirstLetter
}
