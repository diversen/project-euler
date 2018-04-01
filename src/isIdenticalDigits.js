var intStrToAry = require('./intStrToAry')
function isIdenticalDigits(str, strb) {

    str = str.toString()
    strb = strb.toString()

    let length = str.length
    if (length !== strb.length) {
        return false
    }
	
    let strSorted = intStrToAry(str).sort().join('')
    let strbSorted = intStrToAry(strb).sort().join('')
    
    if (strSorted === strbSorted) {
        return strSorted
    }
    return false
}

module.exports = isIdenticalDigits