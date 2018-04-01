/** 
 * 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
 *
 * Find the sum of all numbers which are equal to the sum of the factorial of
 * their digits.
 *
 * Note: as 1! = 1 and 2! = 2 are not sums they are not included.
*/
var timer = require('./src/timer')
var intStrToAryInts = require('./src/intStrToAryInts')

function factorial (num) {
    var res = 1
    while (num) {
        res *= num--
    }
    return res
}

function sumAryFactorial (ary) {
    return ary.reduce ( (a, b) => {
        return a + factorial(b)
    }, 0)
}

var max = 40585 // Discovered after solution
var totalSum = 0
for (let i = 3; i <= max; i++) {
    let intAry = intStrToAryInts(i.toString())

    let sum = sumAryFactorial(intAry)
    if (intAry.join('') === sum.toString()) {
        totalSum += parseInt(sum)
    }
}

console.log('Total: ' + totalSum)
console.log(timer.getTime() / 1000)