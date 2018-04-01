/** 
The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, 
is unusual in two ways: (i) each of the three terms are prime, and, 
(ii) each of the 4-digit numbers are permutations of one another.
There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, 
exhibiting this property, but there is one other 4-digit increasing sequence.
What 12-digit number do you form by concatenating the three terms in this sequence?
*/

var sieve = require('./src/sieve-of-eratosthenes')
var numericSum = require('./src/numericSum')
var permute = require('get-unique-permutations')
var primes = sieve(10000)

function checkPrime (primes, prime, d) {
    
    let c = 0
    res = []
    for (let p = 0; p < primes.length; p++) {
        if (prime == primes[p] - d) {
            if (c++ > 2) return []
            res.push(primes[p])
            d = d*2
        }
    }
    if (res.length === 2) {
        res.unshift(prime)
        return res
    }
    return []
}


for (let i = 2; i < primes.length; i++) {
    
    var res = checkPrime(primes, primes[i], 3330)
    if (res.length === 3) { 
        //console.log(permute(res))
        console.log(res.join(''))
    }
}

