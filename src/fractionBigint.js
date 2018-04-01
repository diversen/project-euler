var bigInt = require("big-integer")

/**
 * Multiply two fractions and return a fraction
 * @param {object} f1 {n, d}
 * @param {object} f2 {n, d}
 * @returns {object} result {n, d}
 */
function fractionMulitply (f1, f2) {
    return {
        n: bigInt(f1.n).multiply(f2.n).toString(), 
        d: bigInt(f1.d).multiply(f2.d).toString()
    }
}

/**
 * Adds two fractions and return a fraction
 * @param {object} f1 {n, d}
 * @param {object} f2 {n, d}
 * @returns {object} result {n, d}
 */
function fractionAdd (f1, f2) {
    let tmp1 = {
        n: bigInt(f1.n).multiply(f2.d).toString(),
        d: bigInt(f1.d).multiply(f2.d).toString()
    } 
    let tmp2 = {
        n: bigInt(f2.n).multiply(f1.d).toString(),
        d: bigInt(f2.d).multiply(f1.d).toString()
    } 
    return {
        n: bigInt(tmp1.n).add(tmp2.n).toString(), 
        d: tmp1.d
    }
}

module.exports = {
    fractionMulitply: fractionMulitply,
    fractionAdd: fractionAdd
}
