/**
 * Euclid's lemma — If a prime p divides the product nm of two
 * integers n and m, then p must divide at least one of those integers n and m.
 * @param {int} p 
 * @param {int} n 
 * @param {int} m 
 * @returns {boolean} 
 */
function euklidsLemma (p, n, m) {
    if (n % p === 0) {
        return true
    }
    if (m % p === 0) {
        return true
    }
    return false
}

module.exports = euklidsLemma