/** 
 * Surprisingly there are only three numbers that can be written as the sum of
 * fourth powers of their digits:
 *
 * 1634 = 14 + 64 + 34 + 44 8208 = 84 + 24 + 04 + 84 9474 = 94 + 44 + 74 + 44 As
 * 1 = 14 is not a sum it is not included.
 *
 * The sum of these numbers is 1634 + 8208 + 9474 = 19316.
 *
 * Find the sum of all the numbers that can be written as the sum of fifth
 * powers of their digits.
*/

var p = Math.pow
var total = 0

// Power
var x = 5
var maxSum = 0

for(let i = 1; i <= 6; i++) {
    maxSum += p(9, x)
}

console.log('max: ' + maxSum)

var result = 0
for(let i = 2; i <= maxSum; i++) {
    let ary = i.toString().split('')

    let total = 0
    for (let num of ary) {
        total += p(num, x)
    }

    if (total === i) {
        console.log(i)
        result += i
    }
}

console.log('result: ' + result)