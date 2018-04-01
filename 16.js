/** 
 * 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 * What is the sum of the digits of the number 21000?
*/
var bigint = require('big-integer')

var powRes = bigint(2).pow(1000).toString()
var resAry = powRes.split('')
var res = 0

resAry.forEach( v => {
    res+= parseInt(v)
})

console.log('Result is: ' + res)
