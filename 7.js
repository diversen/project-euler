/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
 * that the 6th prime is 13.
 *
 * What is the 10 001st prime number? 
 */

var isPrime = require('./src/isPrime')

var i = 2
var numPrime = 0
var searchFrom = 2
var findPrime = 10001
while (true) {
    if (isPrime(i, searchFrom)) {
        searchFrom = i
        numPrime++
    }

    if (numPrime == findPrime) {
        console.log('Result is: ' + i)
        break
    }
    i++
}
