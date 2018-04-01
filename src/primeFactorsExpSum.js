var primeFactors = require('./primeFactors')

/**
 * Get sum of exponents of the prime factors, e.g
 * 2*2*2 = 2^3 => 3
 * 2*2*2*2*5 = 2^4 + 5^1 => 5
 * @param {int} num 
 * @returns {int} sum of exponents
 */
function primeFactorsExpSum (num) {
    let primes = primeFactors(num)

    var obj = {}
    primes.forEach( (v) => {
        if (!obj[v]) {
            obj[v] = 1
        } else {
            obj[v]++
        }
    })
    
    var sum = 0
    for (let key in obj) {
        sum += obj[key]
    }
    return sum
}

module.exports = primeFactorsExpSum