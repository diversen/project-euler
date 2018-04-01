/** 
 * The series, 11 + 22 + 33 + ... + 1010 = 10405071317.
 *
 * Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.
*/

var bigInt = require("big-integer")
var sum = 0
for(i = 1; i <= 1000; i++) {
	var res = bigInt(i).pow(i)
    sum = bigInt(sum).add(res)	
}

console.log('Result is: ' + sum.toString(10).slice(-10))
