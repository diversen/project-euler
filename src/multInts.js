"use strict"

var addInts = require('./addInts')

function multSingle (multiplier, multiplcand) {

    multiplcand = multiplcand.toString().split('').reverse()

    var carry = 0
    var result = []
    
    for(let i = 0; i < multiplcand.length; i++ ) {
        let toMultiply = parseInt(multiplcand[i])
        let currentRes = multiplier * toMultiply + carry
        let res = currentRes % 10
        carry = Math.floor(currentRes / 10)
	    result.push(res)
    }

    if (carry > 0) {
		result.push(carry)
    }
    
	return result.reverse().join('')
}

function repeat(str, count) {
    var array = [];
    for(var i = 0; i < count;) {
        array[i++] = str
    }
    return array.join('')
}

function multInts(first, sec) {

    first = first.toString()
    sec = sec.toString()
    var multiplierAry = first.toString().split('').reverse()
    var multiplcand = sec.toString()

	var result = 0
	var carry = 0

	for(let i = 0; i < multiplierAry.length; i++ ) {
        let currentRes = multSingle(multiplierAry[i], multiplcand)
        let zeroPad = repeat('0', i)
        result = addInts(result, currentRes + zeroPad)
    }

    return result
}

module.exports = multInts