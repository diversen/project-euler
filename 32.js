/** 
 * We shall say that an n-digit number is pandigital if it makes use of all the
 * digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1
 * through 5 pandigital.
 *
 * The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing
 * multiplicand, multiplier, and product is 1 through 9 pandigital.
 *
 * Find the sum of all products whose multiplicand/multiplier/product identity
 * can be written as a 1 through 9 pandigital.
 *
 * HINT: Some products can be obtained in more than one way so be sure to only
 * include it once in your sum. 
*/

var timer = require('./src/timer')
var intStrToAry = require('./src/intStrToAry')
var isPandigital = require('./src/isPandigital')

var res = {}

// n and m found after running through the numbers
for (let n = 138; n <= 1963; n++) {
	for (let m = 4; m <= 48; m++) {
		let p = n * m
		let digits = p.toString() + n.toString() + m.toString()
		if (digits.length != 9) {
			continue
		}
		if (isPandigital(digits)) {
			res[p] = digits
		}
	}
}

var resAsSum = 0
for (let key in res) {
	resAsSum += parseInt(key) 
}

console.log('Result: ' + resAsSum)
console.log(timer.getTime() / 1000)