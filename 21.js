/**
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n
 * which divide evenly into n). If d(a) = b and d(b) = a, where a ≠ b, then a
 * and b are an amicable pair and each of a and b are called amicable numbers.
 *
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44,
 * 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4,
 * 71 and 142; so d(284) = 220.
 *
 * Evaluate the sum of all the amicable numbers under 10000.
 */

var timer = require('./src/timer')
var getDivisors = require('./src/getDivisors')
var num = 10000

function sumDivisors (divsors) {
	let sum = 1
	divsors.forEach (v => {
		sum += v
	})
	return sum
}

var ary = []
for(let i = 1; i < num; i++) {
	let divsors = getDivisors(i)
	ary[i] = sumDivisors(divsors)
}

var final = 0
ary.forEach( (v, k) => {
	if (ary[v] == k && v != k) {
		final += k
	}
})


console.log('Result is: ' + final)
console.log('Time in seconds: ' + timer.getTime() / 1000)
