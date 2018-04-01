/** 
 * Factorial using big-integer
 */

var bigint = require('big-integer')

function factorialBigint (num) {
    var res = 1
    while (num) {
        res = bigint(num--).multiply(res).toString()
    }
    return res
}

module.exports = factorialBigint