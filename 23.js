/**

A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
A number n is called deficient if the sum of its proper divisors is less than n and 
it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, 
the smallest number that can be written as the sum of two abundant numbers is 24. 
By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. 
However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number 
that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */
"use strict";

var getDivsors = require('./src/getDivisors')
var arySum = require('./src/arySum')
var aryFlipToObj = require('./src/aryFlipToObj')
var timer = require('./src/timer')
var binarySearch

// Test if abundant number
function isAbundantNumber (n) {
    let sum = arySum(getDivsors(n)) + 1
    if (sum > n) {
        return sum
    }
    return false
}

// Limit of abundants
var limit = 28123

// Create array of abundant numbers
var abundants = []
for(let i = 1; i < limit; i++) {
    if (isAbundantNumber(i) !== false) {
        abundants.push(i)
    }
}

// Sum all abundant numbers beyond limit
var sumOfAbundants = {}
for(let i = 0; i < abundants.length; i++) {
    for (let n = i; n < abundants.length; n++) {
        if (abundants[i] + abundants[n] < limit) {
            sumOfAbundants[abundants[i] + abundants[n]] = true
        } else {
            break
        }
    }
}

// Check which numbers of to limit is not in sumOfAbundants
var sum = 0
for (let i = 0; i < limit; i++ ) {
    if (!sumOfAbundants[i]) {
        sum += i
    } 
}

console.log("Result: " + sum)
console.log("Found in " + timer.getTime() / 1000)

/** =>
Result: 4179871
Found in 0.696
 */