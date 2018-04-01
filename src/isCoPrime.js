var gcd = require('./gcd')

function isCoPrime (n, m) {
    if (gcd(n, m) === 1) {
        return true
    } 
    return false
}

module.exports = isCoPrime