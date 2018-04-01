/**
The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing
multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can
be written as a 1 through 9 pandigital.

*/

// Solutions can contain max 987654321

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
			console.log(p, n,  m)
		}
	}
}

var resAsSum = 0
for (let key in res) {
	console.log(key)
	resAsSum += parseInt(key) 
}

console.log('Result: ' + resAsSum)
console.log(timer.getTime() / 1000)