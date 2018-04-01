var primeFactors = require('./primeFactors')

function getNumDivisors (num) {
    let factors = primeFactors(num)
    let factorObj = {}
    factors.forEach (v => {
        if (factorObj[v] === undefined) {
            factorObj[v] = 0
        }
        factorObj[v] += 1
    })

    var res = 1
    for (let i in factorObj) {
        res *= factorObj[i] + 1
    }
    return res
}

module.exports = getNumDivisors