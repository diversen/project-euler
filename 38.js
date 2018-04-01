/** 
 * Take the number 192 and multiply it by each of 1, 2, and 3:
 *
 * 192 × 1 = 192 192 × 2 = 384 192 × 3 = 576 By concatenating each product we
 * get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated
 * product of 192 and (1,2,3)
 *
 * The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4,
 * and 5, giving the pandigital, 918273645, which is the concatenated product of
 * 9 and (1,2,3,4,5).
 *
 * What is the largest 1 to 9 pandigital 9-digit number that can be formed as
 * the concatenated product of an integer with (1,2, ... , n) where n > 1?
*/

var isPandigital = require('./src/isPandigital')
var timer = require('./src/timer')

var max = 987654321
var res = 0
var productAsInt = 0
var productAsStr = ''
for (let n = 1; n < 10000; n++) {
    productAsInt = 0
    productAsStr = ''
    for(let m = 1; m < 9; m++) {
        productAsInt += n*m
        productAsStr += n*m.toString()
        if (productAsInt > max) {
            break
        }
        if (isPandigital(productAsStr) && parseInt(productAsStr) > res) {
            res = productAsStr
        }
    }
}

console.log('Result is: ' + res)
console.log('In time: ' + timer.getTime() / 1000)
