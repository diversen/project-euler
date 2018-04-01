// https://brilliant.org/wiki/finding-the-last-digit-of-a-power/
// 4,8,6,2
var bigInt = require("big-integer")
var timer = require('./src/timer')

var res = bigInt(2).modPow(7830457, 10000000000).multiply(28433).add(1).toString()
console.log('Result is: ' + res.substr(-10))
console.log('In time: ' + timer.getTime() / 1000)
