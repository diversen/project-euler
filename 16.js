/**

215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 21000?

*/
var pow = require('./src/pow')

var powRes = pow(2, 1000)
var resAry = powRes.split('')
var res = 0

resAry.forEach( v => {
    res+= parseInt(v)
})

console.log(res)
