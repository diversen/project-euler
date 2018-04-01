var modPow = require('./powMod')

/**
 * a^p-1 congruent to 1 mod p.
 * @param {int} base random number to check against
 * @param {int} primePow prime number
 * @returns {int} 1 if prime-like 
 */
function fermat (base, primePow ) {
    var t = modPow(base, primePow - 1, primePow)
    return t
}

module.exports = fermat