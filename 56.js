/**
A googol (10100) is a massive number: one followed by one-hundred zeros; 100100
is almost unimaginably large: one followed by two-hundred zeros. Despite their
size, the sum of the digits in each number is only 1.

Considering natural numbers of the form, ab, where a, b < 100, what is the
maximum digital sum?
 */

var bigInt = require('big-integer')
var timer = require('./src/timer')

function getIntStrSum (a, b) {
    var final = 0
    var res = bigInt(a).pow(b).toString()
    var numAry = res.split('')
    numAry.forEach ( (v) => {
        final += parseInt(v)
    })
    return final
}


var max = 99
var res = 0
for (let a = max; a > 0; a--) {
    for (let b= max; b > 0; b--) {
        let curRes = getIntStrSum(a, b)
        if (curRes > res) {
            res = curRes
        }
        
    }
    console.log('Outer: ', a)
}

console.log("Result: " + res)
console.log("In time: " + timer.getTime() / 1000)

/** => 
Result: 972
In time: 0.177
*/
