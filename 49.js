/** 
 * The arithmetic sequence, 1487, 4817, 8147, in which each of the terms
 * increases by 3330, is unusual in two ways: (i) each of the three terms are
 * prime, and, (ii) each of the 4-digit numbers are permutations of one another.
 * There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes,
 * exhibiting this property, but there is one other 4-digit increasing sequence.
 * What 12-digit number do you form by concatenating the three terms in this
 * sequence?
*/

var isIdenticalDigits = require('./src/isIdenticalDigits')
var isPrime = require('./src/isPrime')
var timer = require('./src/timer')

function getPermutations (n) {

    let n1 = n +  3330
    if (!isIdenticalDigits(n, n1)) {
        return false
    }

    let n2 = n1 + 3330
    if (!isIdenticalDigits(n, n2)) {
        return false
    }

    if (!isPrime(n) || !isPrime(n1) || !isPrime(n2) ) {
        return false
    }

    return [n, n1, n2]
    
}

var options = []
for(let i = 1000; i <= 9999; i++) {
    
    let perms = getPermutations(i)
    if (perms) {
        options.push(perms)
    }
}

console.log('Result is: ' + options[1].join(''))
console.log('In time: ' + timer.getTime() / 1000)



