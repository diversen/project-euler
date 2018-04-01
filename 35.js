/** 
 * The number, 197, is called a circular prime because all rotations of the
 * digits: 197, 971, and 719, are themselves prime.
 *
 * There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71,
 * 73, 79, and 97.
 *
 * How many circular primes are there below one million?
*/

var sieve = require('./src/sieve-of-eratosthenes')
var intStrToAryInts = require('./src/intStrToAryInts')
var permutate = require('./src/permutate')
var aryRotate = require('./src/aryRotate')
var binarySearch = require('./src/binarySearch')
var timer = require('./src/timer')

var primes = sieve(999999)

function getAryRotations (ary) {
    var ret = []
    var tmp = Array.from(ary)
    ret.push(tmp)
    for(let i = 1; i < ary.length; i++ ) {
        tmp = aryRotate(Array.from(tmp))
        ret.push(tmp)
    }
    return ret
}

function getAryRotationsAsInts(ary) {
    var rotations = getAryRotations(ary)
    var ret = []
    for(let i = 0; i < rotations.length; i++) {
        ret.push(parseInt(rotations[i].join('')))
    }
    return ret
}

var circularPrimes = []
for(let i = 0; i < primes.length; i++) {
    
    let ary = getAryRotationsAsInts(primes[i].toString())
    let test = true
    for(let a = 0; a < ary.length; a++) {
        if (binarySearch(primes, parseInt(ary[a])) === false) {
            test = false;
            break;
        }
    }
    if (test) {
        circularPrimes.push(primes[i])
    }
}

// About 6 secs to generate the primes and 1 to calculate which ones
// Are circular primes. 
console.log('Circular primes below circular below 999999: ' + circularPrimes.length)
console.log('In time: ' + timer.getTime() / 1000)
