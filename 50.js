/**
 * The prime 41, can be written as the sum of six consecutive primes: 41 = 2 + 3
 * + 5 + 7 + 11 + 13 This is the longest sum of consecutive primes that adds to
 * a prime below one-hundred. The longest sum of consecutive primes below
 * one-thousand that adds to a prime, contains 21 terms, and is equal to 953.
 * Which prime, below one-million, can be written as the sum of the most
 * consecutive primes?
 */

var sieve = require('./src/sieve-of-eratosthenes')
var timer = require('./src/timer')
var aryFlipToObj = require('./src/aryFlipToObj')
var length = 1000000
var primes = sieve(length)

var primesFlipped = aryFlipToObj(primes)
var consecutiveSum = {}
var sum = 0

console.log('Timer after prime generation: ' + timer.getTime() / 1000)

function consecutivePrimeSums (primes, index, max) {
    var obj = {}
    var sum = 0
    var l = 0
    for(let i = index; i < primes.length; i++) {
        sum += primes[i]

        if (sum > max) {
            return obj
        }

        l += 1
        obj[primes[i]] = {
            sum: sum,
            length: l
        }
    }
    return obj
}

function longestConsecutivePrimeSumByIndex (primes, index, max) {
    var consecutiveSums = consecutivePrimeSums(primes, index, max)
    var res = {}
    for(let k in consecutiveSums) {
        let test = consecutiveSums[k]
    
        if (test.sum < length && primesFlipped[test.sum]) {
            res = test
        }
    }
    return res
}

var finalRes = {
    length: 0
}

for(let i = 0; i < primes.length; i++) {
    let res = longestConsecutivePrimeSumByIndex(primes, i, length)
    if (res.length > finalRes.length) {
        finalRes = res
    }    
}

console.log('Timer after result gained ' + timer.getTime() / 1000)
console.log('Result: '  + finalRes.sum)

/**
=> 
Timer after prime generation: 0.162
Timer after result gained 0.552
Result: 997651
*/
