/**
 * Multiply two fractions and return a fraction
 * @param {object} f1 {n, d}
 * @param {object} f2 {n, d}
 * @returns {object} result {n, d}
 */
function fractionMulitply (f1, f2) {
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

module.exports = {
    fractionMulitply: fractionMulitply,
    fractionAdd: fractionAdd
}
