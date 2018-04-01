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
 * Method that calculates the reminder of a multiplication 
 * @param {int} x number
 * @param {int} y number 
 * @param {int} mod e.g. 13
 */
function multMod (x, y, mod) {
    r = modulo(x*y, mod)
    return r
}

module.exports = multMod