/** 
 * The first known prime found to exceed one million digits was discovered in
 * 1999, and is a Mersenne prime of the form 26972593−1; it contains exactly
 * 2,098,960 digits. Subsequently other Mersenne primes, of the form 2p−1, have
 * been found which contain more digits.
 *
 * However, in 2004 there was found a massive non-Mersenne prime which contains
 * 2,357,207 digits: 28433×2^7830457+1.
 *
 * Find the last ten digits of this prime number.
*/
// https://brilliant.org/wiki/finding-the-last-digit-of-a-power/

var bigInt = require("big-integer")
var timer = require('./src/timer')

var res = bigInt(2).modPow(7830457, 10000000000).multiply(28433).add(1).toString()

console.log('Result is: ' + res.substr(-10))
console.log('In time: ' + timer.getTime() / 1000)
