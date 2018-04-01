"use strict"

function normalizeIntArray (first, sec) {

	var firstAry = first.toString().split('').reverse()
	var secAry = sec.toString().split('').reverse()

	if (secAry.length > firstAry.length) {
		let tmp = secAry
		secAry = firstAry
		firstAry = tmp
	}

	return {
		first: firstAry,
		second: secAry
	}
}

module.exports = normalizeIntArray