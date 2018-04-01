var factorial = require('./factorialNative')

function binomialCoefficient (n, k) {
    return factorial(n) / (factorial(n-k) * factorial(k))
}

module.exports = binomialCoefficient
