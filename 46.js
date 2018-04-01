/** 
 * It was proposed by Christian Goldbach that every odd composite number can be
 * written as the sum of a prime and twice a square.
 *
 * 9 = 7 + 2×12 
 * 15 = 7 + 2×22 
 * 21 = 3 + 2×32 
 * 25 = 7 + 2×32 
 * 27 = 19 + 2×22 
 * 33 = 31 + 2×12
 *
 * It turns out that the conjecture was false.
 *
 * What is the smallest odd composite that cannot be written as the sum of a
 * prime and twice a square?
 */

var sieve = require('./src/sieve-of-eratosthenes')
var hashmap = require('./src/hashmapAry')
var timer = require('./src/timer')

// Test length of primes
var testLengthPrimes = 6000
var primes = sieve(testLengthPrimes)

// Test length of squares
var testLengthSquares = 40
var primesHash = hashmap(primes)

function getOddCompositeUpto(num) {
    var last = primes[primes.length - 1]
    var oddComposite = []
    for(let i = 1; i < num; i += 2) {
        if (primesHash[i]) {
            continue
        }
        if (i > last) {
            break
        }
        oddComposite.push(i)
    }
    return oddComposite
}

function goldbachOtheConjecture (n) {

    for(let i = 0; i < primes.length; i++) {
        for(let sq = 1; sq <= testLengthSquares; sq++) {
            let test = primes[i] + (2* Math.pow(sq, 2))
            if (test == n) {
                return true
            }
            if (test > n) {
                break
            }
        }
        if (primes[i] > n) {
            break
        }
    }
    return false
}

var odds = getOddCompositeUpto(testLengthPrimes)
for(let i = 2; i < odds.length; i++) {
    if (!goldbachOtheConjecture(odds[i])) {
        console.log("Result is: " + odds[i])
        console.log("In time: " + timer.getTime() / 1000)
    }
}
