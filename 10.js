/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 */

var sieve = require('./src/sieve-of-eratosthenes')
var ary = sieve(1999999)

var res = 0
ary.forEach( function (v) {
    res+=v
})

console.log(res)
