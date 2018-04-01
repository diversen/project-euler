/** 
 * Slow factorial
*/
var multInts = require('./multInts')

function factorial (num) {
    var res = 1
    while (num) {
        res = multInts(num--, res)
    }
    return res
}

module.exports = factorial