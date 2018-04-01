var powMod = require('./powMod')
var totients = require('./totients')

/**
 * a^phi(n) congruent to 1 mod n.
 * Returns 1 if a and n are co-primes
 * @param {int} a 
 * @param {int} n 
 * @returns {int} 1 if relative primes
 */
function euler (a, n ) {
    var tNum = totients(n)
    var t = powMod(a, tNum, n)
    return t
}

module.exports = euler