var intStrToAry = require('./intStrToAry')

function sortDigits (str) {
    str = str.toString()
    let strSorted = intStrToAry(str).sort().join('')
    return strSorted
}

module.exports = sortDigits