/*
Euler discovered the remarkable quadratic formula:

n2+n+41 It turns out that the formula will produce 40 primes for the consecutive
integer values 0≤n≤39. However, when n=40,402+40+41=40(40+1)+41 is divisible by
41, and certainly when n=41,412+41+41 is clearly divisible by 41.

The incredible formula n2−79n+1601 was discovered, which produces 80 primes for
the consecutive values 0≤n≤79. The product of the coefficients, −79 and 1601, is
−126479.

Considering quadratics of the form:

n2+an+b, where |a|<1000 and |b|≤1000

where |n| is the modulus/absolute value of n e.g. |11|=11 and |−4|=4 Find the
product of the coefficients, a and b, for the quadratic expression that produces
the maximum number of primes for consecutive values of n, starting with n=0.
*/
var isPrime = require('./src/isPrime')
var timer = require('./src/timer')

/**
 * Example e.g. Eulers quadTest
 * quadTest(n, 1, 41) 0 <= n <= 41 yields 40 primes, or
 * quadTest(n, -79, 1601) 0 <= n <= 79 yields 80 primes
 * @param {int} n 
 * @param {int} a 
 * @param {int} b 
 */
function quadTest (n, a, b) {
    return Math.pow(n, 2) + a*n + b
}

/**
 * Test quad length from an a and b. 
 * @param {int} a 
 * @param {int} b 
 */
function quadTestLength(a, b, n) {
    
    while(true) {
        let c = quadTest(n, a, b) 
        if (isPrime(c)) {
            n++
        } else {
            break
        }
    }
    return n
}


var iterations = 0
var max = 0
var result = {}
for(let a = -1000; a < 1000; a++) {
    for(let b = -1000; b <= 1000; b++) {
        let currentMax = quadTestLength(a, b, 0)
        if (currentMax > max) {
            max = currentMax
            result = {a: a, b: b, max: currentMax}
        }
    }
}

console.log('Result is: ')
console.log(result)
console.log('Product: ' + result['a']*result['b'])
console.log('In time: ' + timer.getTime() / 1000)

/** =>
Result is: 
{ a: -61, b: 971, max: 71 }
Product: -59231
In time: 0.123
*/