/** 
 * An irrational decimal fraction is created by concatenating the positive
 * integers:
 *
 * 0.123456789101112131415161718192021...
 *
 * It can be seen that the 12th digit of the fractional part is 1.
 *
 * If dn represents the nth digit of the fractional part, find the value of the
 * following expression.
 *
 * d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
*/

var timer = require('./src/timer')

var fraction = ''
var maxDigits = 1000000
var begin = 1

while (true) {
    fraction += begin.toString()
    begin++
    if (fraction.length > maxDigits) {
        break
    }
}

var fractionAry = fraction.split('')

var result =  
    fractionAry[1-1] * 
    fractionAry[10-1] * 
    fractionAry[100-1] * 
    fractionAry[1000-1] * 
    fractionAry[10000-1] * 
    fractionAry[100000-1] * 
    fractionAry[1000000-1] 

console.log("Result: " + result)
console.log("In time: " + timer.getTime() / 1000)

/** =>
Result: 210
In time: 0.088
 */