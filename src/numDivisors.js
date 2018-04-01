var primeFactors = require('./primeFactors')

function numDivisors (num){
    var primes = primeFactors(num)
    var obj = {}
    primes.forEach( (v) => {
        if (!obj[v]) {
            obj[v] = 1
        } else {
            obj[v]++
        }
    })
    
    var product = 1
    for (let key in obj) {
        product *= obj[key] + 1
    }
    return product
}

module.exports = numDivisors