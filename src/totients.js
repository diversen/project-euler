var gcd = require('./gcd')
/*

http://mathworld.wolfram.com/TotientFunction.html

The totient function phi(n), also called Euler's totient function, is defined as
the number of positive integers <=n that are relatively prime to (i.e., do not
contain any factor in common with) n, where 1 is counted as being relatively
prime to all numbers. 

Since a number less than or equal to and relatively prime to a given number is
called a totative, the totient function phi(n) can be simply defined as the
number of totatives of n. For example, there are eight totatives of 24 (1, 5, 7,
11, 13, 17, 19, and 23), so phi(24)=8.

The function is very naive as it does not really use eulers totient function,
but just checks the gcd of numbers that iterates up to n 

Eulers totient functon:

φ(n) = n *(1 - 1/p1)* ... (1 - 1/pn).

*/

/**
 * Returns totients as int or ary
 * @param {n} n number 
 * @param {ary} ary boolean 
 */
function totients (n, ary) {

    let totientsAry = []
    let totientSum = 0
    for(let i = 1; i <= n; i++) {
        if (gcd(n, i) === 1) {
            totientSum++
            totientsAry.push(i)
        }
    }
    if (ary) {
        return totientsAry
    }
    return totientSum
}

module.exports = totients
