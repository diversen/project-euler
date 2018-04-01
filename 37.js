/** 
 * The number 3797 has an interesting property. Being prime itself, it is
 * possible to continuously remove digits from left to right, and remain prime
 * at each stage: 3797, 797, 97, and 7. Similarly we can work from right to
 * left: 3797, 379, 37, and 3.
 *
 * Find the sum of the only eleven primes that are both truncatable from left to
 * right and right to left.
 *
 * NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
*/

var sieve = require('./src/sieve-of-eratosthenes')
var timer = require('./src/timer')
var primes = sieve(800000)
var binarySearch = require('./src/binarySearch')


function removeChar (str, reverse) {
    let l = str.length

    if (reverse) {
        return str.slice(1, l)
    }
    return str.slice(0, l - 1)
}

function testTruncablePrime (n, reverse) {
    let s = n.toString()
    var tmp = s
    for(let i = 0; i < s.length ; i++) {
        if (binarySearch(primes, parseInt(tmp)) === false) {
            return false
        }
        tmp = removeChar(tmp, reverse)
    }
    return true

}

// console.log(testTruncablePrime(3797, false) && testTruncablePrime(3797, true))

var sum = 0
for(let i = 4; i < primes.length; i++) {
    if (testTruncablePrime(primes[i], false) && testTruncablePrime(primes[i], true)) {
        sum+= primes[i]
    }
}

// console.log(primes)
console.log('Result: ' + sum)
console.log('In time: ' + timer.getTime() / 1000)



