var bc = require('./binomialCoefficient')

// P(k out of n) = n! / k!(n-k)! ) * p^k(1-p)^(n-k)
// 
// n = total number tries, e.g. die throws
// k = number of positive results
// p = probability of every try
//
// E.g. 2 tries with a dice and success in one try 
// with probability of 1/6 for every try. 
// This could be like hitting one six in two throws
// 
// generalBinomialProbability(2, 1, 1/6)
// => 0.2777777777777778
// 
function  generalBinomialProbability (n, k ,p) {
    return bc(n, k) * Math.pow(p, k) * Math.pow(1-p, n-k)
}

module.exports = generalBinomialProbability