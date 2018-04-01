/**
 * The number, 1406357289, is a 0 to 9 pandigital number because it is made up
 * of each of the digits 0 to 9 in some order, but it also has a rather
 * interesting sub-string divisibility property.
 *
 * Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note
 * the following:
 *
 * d2d3d4=406 is divisible by 2 d3d4d5=063 is divisible by 3 d4d5d6=635 is
 * divisible by 5 d5d6d7=357 is divisible by 7 d6d7d8=572 is divisible by 11
 * d7d8d9=728 is divisible by 13 d8d9d10=289 is divisible by 17 Find the sum of
 * all 0 to 9 pandigital numbers with this property.
 */
var isPandigital = require('./src/isPandigital')
var intStrToAry = require('./src/intStrToAry')
var timer = require('./src/timer')

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function isDivisbleWith(n, d) {
    if (n % d === 0) {
        return true
    }
    return false
}

function isUnique(str) {
    return new Set(str).size == str.length;
}

function getDigitPart(n) {
    var a = []
    for (let i = 0; i <= 999; i++) {
        let tmp = pad(i, 3)
        if (isDivisbleWith(tmp, n) && isUnique(tmp.toString())) {
            a.push(tmp)
        }
    }
    return a
}

// Get possible d2d3d4
var numbers = getDigitPart(2)

// add digit to ary and return array with one extra digit
function getNextDigitAry (ary, divisor) {

    let ret = []
    for (let n = 0; n < ary.length; n++) {
        for(let m = 0; m <= 9; m++) {
            let test = ary[n] + m
            let last = test.toString().slice(-3)
            
            if (isDivisbleWith(last, divisor) && isUnique(test.toString())) {
                ret.push(test)
            }        
        }
    }
    return ret
}

var divisors = [3, 5, 7, 11, 13, 17]

for(let i = 0; i < divisors.length; i++) {
    numbers = getNextDigitAry(numbers, divisors[i])
}

var finalSum = 0
for(let i = 0; i <= 9; i++) {
    for(let n = 0; n < numbers.length; n++) {
        let test = i + numbers[n]
        if (isPandigital(test, 10)) {
            finalSum += parseInt(test)
        }
    }
}


console.log("Result is: " + finalSum)
console.log("Found in: " + timer.getTime() / 1000 + ' sec(s)')

/**
 * Result is: 16695334890 Found in: 0.028 sec(s)
 */
