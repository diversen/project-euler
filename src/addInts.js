"use strict"

var normalizeIntArray = require('./normalizeIntArray')

function addInts(first, sec) {

	var normalized = normalizeIntArray(first, sec)
	var firstAry = normalized.first
	var secAry = normalized.second

	var length = firstAry.length
	var result = []
	var carry = 0

	for(let i = 0; i < length; i++ ) {
		if (secAry[i] === undefined) {
			secAry[i] = 0
		}

		let digitFirst = parseInt(firstAry[i])
		let digitSec = parseInt(secAry[i])

		let currentRes = digitFirst + digitSec + carry
		if (currentRes >= 10) {
			carry = 1
			result.push(currentRes - 10)
		} else {
			carry = 0
			result.push(currentRes)
		}

	}
	if (carry === 1) {
		result.push(carry)
	}
	return result.reverse().join('')
	
}

module.exports = addInts
