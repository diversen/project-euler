/**
 * The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.
 *
 * Find the sum of all numbers, less than one million, which are palindromic in
 * base 10 and base 2.
 *
 * (Please note that the palindromic number, in either base, may not include
 * leading zeros.)
 */

var timer = require('./src/timer')

function reverseString(str) {
    return str.split('').reverse().join('')
}

function isPalindromicNumber10 (n) {
    let rn = n.toString()
    let rnr = reverseString(rn)
    if (rnr === rn) {
        return true
    }
    return false
}

function dec2bin(dec){
    return (dec >>> 0).toString(2)
}

function isPalindromicNumber2 (n) {
    n = dec2bin(n)
    let rn = n.toString()
    let rnr = reverseString(rn)
    if (rnr === rn) {
        return true
    }
    return false
}

var max = 1000000
var sum = 0
for(let i= 1; i < max; i++) {
    if (isPalindromicNumber10(i) && isPalindromicNumber2(i)) {
        sum += i
    }
}

console.log('Result: ' + sum)
console.log('In time: ' + timer.getTime() / 1000)
