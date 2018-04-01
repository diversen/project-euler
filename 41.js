/** 
 * We shall say that an n-digit number is pandigital if it makes use of all the
 * digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is
 * also prime.
 *
 * What is the largest n-digit pandigital prime that exists?
*/

var timer = require('./src/timer')
var isPandigital = require('./src/isPandigital')
var sieve = require('./src/sieve-of-eratosthenes')

var max = 987654321
var min = max - 1000

// 10 Milions enough
// First tested with a 100 millions

var primes = sieve(10000000)

var max = 0
for(let i = 0; i < primes.length; i++) {
    if (isPandigital(primes[i], primes[i].toString().length)) {
        if (primes[i] > max) {
            max = primes[i]
        }
    }
}

console.log('Result is: ' +max)
console.log('In time: ' + timer.getTime() / 1000)

/**
Result is: 7652413
In time: 2.039
 */