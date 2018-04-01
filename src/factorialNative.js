/** 
 * Factorial using native javascript numbers
 */
function factorialNative (num) {
    var res = 1
    while (num) {
        res = num-- * res
    }
    return res
}

module.exports = factorialNative