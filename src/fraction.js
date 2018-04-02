var gcd = require('./gcd')
/**
 * Multiply two fractions and return a fraction
 * @param {object} f1 {n, d}
 * @param {object} f2 {n, d}
 * @returns {object} result {n, d}
 */
function fractionMultiply (f1, f2) {
    return {n: f1.n * f2.n, d: f1.d * f2.d}
}

/**
 * Adds two fractions and return a fraction
 * @param {object} f1 {n, d}
 * @param {object} f2 {n, d}
 * @returns {object} result {n, d}
 */
function fractionAdd (f1, f2) {
    let tmp1 = {n: f1.n* f2.d, d: f1.d * f2.d} 
    let tmp2 = {n: f2.n* f1.d, d: f2.d * f1.d} 
    return {n: tmp1.n + tmp2.n, d: tmp1.d}
}

function fractionEqual (f1, f2) {
    let gcd1 = gcd(f1.n, f1.d)
    let tmp1 = {}

    tmp1.n = f1.n / gcd1 
    tmp1.d = f1.d / gcd1 

    let gcd2 = gcd(f2.n, f2.d)
    let tmp2 = {}
    
    tmp2.n = f2.n / gcd2 
    tmp2.d = f2.d / gcd2

    if (tmp1.n == tmp2.n && tmp1.d == tmp2.d) {
        return true
    }
    return false
}

function fractionReduce (f) {
    let g = gcd(f.n, f.d)

    return {n: f.n / g, d: f.d / g}
}

module.exports = {
    fractionMultiply: fractionMultiply,
    fractionAdd: fractionAdd,
    fractionEqual: fractionEqual,
    fractionReduce: fractionReduce
}
