/**
 * Modulo of n divided with m
 * Javascript does not return positive numbers on modulu on negative numbers
 * @param {int} n 
 * @param {int} m 
 */
function modulo(n, m) {
    return ((n % m) + m) % m
}

/**
 * Method that calculates the reminder of e.g. 4^200 mod 13
 * @param {int} base the base e.g. 4 
 * @param {int} pow e.g. 200
 * @param {int} mod e.g. 13
 */
function powMod (base, pow, mod) {

    var r = base
    for (let i = 1; i < pow; i++) {
        r = modulo(r*base, mod)
    }
    return r
}

module.exports = powMod