var intStrToAry = require('./intStrToAry')
function isPandigital(str, length) {

	// console.log(str, length)
	if (Number.isInteger(str)) {
		str = str.toString()
	}
	let strSorted = intStrToAry(str).sort().join('')
	if (!length) {
		length = 9
	}

	if (length == 10) {
		strSearch = '0123456789'
	} else {
		strSearch = '123456789'
	}

	if (strSorted === strSearch.substr(0,length)) {
		return true
	}
	return false
}

module.exports = isPandigital
