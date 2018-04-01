/*
A unit fraction contains 1 in the numerator. The decimal representation of the
unit fractions with denominators 2 to 10 are given:

1/2 =   0.5 1/3 =   0.(3) 1/4 =   0.25 1/5 =   0.2 1/6 =   0.1(6) 1/7 =
0.(142857) 1/8 =   0.125 1/9 =   0.(1) 1/10    =   0.1 Where 0.1(6) means
0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a
6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in
its decimal fraction part.

---

Something like this: 

A fraction in lowest terms with a prime denominator other than 2 or 5 (i.e.
coprime to 10) always produces a repeating decimal. The length of the repetend
(period of the repeating decimal) of 1/p is equal to the order of 10 modulo p.
If 10 is a primitive root modulo p, the repetend length is equal to p − 1; if
not, the repetend length is a factor of p − 1. This result can be deduced from
Fermat's little theorem, which states that 10p−1 ≡ 1 (mod p).

1/n is always a fraction in lowest terms

---

Well, this is longer story, so I ended up reading some math. And also created
some functions to do the math.

A great math explantion I have found on finding numbers of decimals in a unit
fraction can be seen here: 

https://www.youtube.com/watch?v=lMrz7ISoDGs&index=54&list=PLIljB45xT85AYIeGfDQwHM8i6PQEDnnTI

*/

var productsFromAry = require('./src/productsFromAry')
var modPow = require('./src/powMod')
var primeFactors = require('./src/primeFactors')
var totients = require('./src/totients')
var isPrime = require('./src/isPrime')
var timer = require('./src/timer')

function decimalCycleLength (num) {
    
    if (!isPrime(num)) { 
        return 0
    }
    var fact = primeFactors(totients(num))
    var products = productsFromAry(fact)

    for(let i = 0; i < products.length; i++) {
        let res = modPow(10, products[i], num)
        if (res === 1) {
            return products[i]
            break
        }
    }
}


var max = 0
var maxIndex = 0
for(let i = 3; i < 1000; i++) {
    let res = decimalCycleLength(i)
    if (res > max) { 
        max = res
        maxIndex = i
    }
}

console.log("Number with most recurring decimals is " + maxIndex + " with decimals " + max)
console.log('Found in: ' + timer.getTime() / 1000)

/** =>
 * Number with most recurring decimals is 983 with decimals 982
 * Found in: 0.232
 */

// Doing the same with a big number
// See: https://www.youtube.com/watch?v=lMrz7ISoDGs&index=54&list=PLIljB45xT85AYIeGfDQwHM8i6PQEDnnTI
var bigNum = 2983063

// Factor into primes
var bigNumPrimeFactors = primeFactors(bigNum)

// Generate product of totients using phi function
var totientProduct = 1
bigNumPrimeFactors.forEach( (e) => {
    totientProduct *= totients(e)
})

// Get primeFactors of totient product
var primeFactors = primeFactors(totientProduct)

// Get possible products of totientProducts prime factors
var products = productsFromAry(primeFactors)

// Look for mod 10^k mod n = 1 (n if bigNum)
for(let i = 0; i < products.length; i++) {
    let res = modPow(10, products[i], bigNum)
    if (res === 1) {
        console.log("Recurring decimals for " + bigNum + " is: " + products[i])
        break
    }
}
