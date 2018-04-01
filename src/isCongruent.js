function modulo(n, m) {
    return ((n % m) + m) % m
}

/**
 * Check if two numbers are congruent
 * That is if they yield the same reminder when 
 * divided by a number
 * @param {int} n 
 * @param {int} m 
 * @param {int} d divisor
 * @returns {mixed} int (the common reminder)
 */
function isCongruent (n, m, d) {
    let rn = modulo(n, d)
    let rm = modulo(m, d)
    if (rn == rm) {
        return rn
    }
    return false
}

module.exports = isCongruent