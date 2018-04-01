"use strict";

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


console.log(final)
console.log('Exec time: ' + timer.getTime())
