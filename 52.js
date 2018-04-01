/** 
 * It can be seen that the number, 125874, and its double, 251748, contain
 * exactly the same digits, but in a different order.
 *
 * Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x,
 * contain the same digits.
*/
var timer = require('./src/timer')
var identical = require('./src/isIdenticalDigits')
function isIdentical (n) {
    n2 = n*2
    n3 = n*3
    n4 = n*4
    n5 = n*5
    n6 = n*6

    if (identical(n2, n3) && identical(n3, n4) && identical(n4, n5) && identical(n5, n6)) {
        return true
    }
    return false
}

for(let i = 100000; i < 1000000; i++) {
    if (isIdentical(i)) {
        console.log("The result is: " + i)
        console.log('Found in seconds: ' + timer.getTime() / 1000)
        break
    }
}