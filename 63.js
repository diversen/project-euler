/**
 * The 5-digit number, 16807=75, is also a fifth power. Similarly, the 9-digit
 * number, 134217728=89, is a ninth power.
 *
 * How many n-digit positive integers exist which are also an nth power?
 */

var timer = require('./src/timer')

function getPowNumbers(pow) {
    let ary = []
    for(let i = 1; i <= 9; i++) {

        let res = Math.pow(i, pow)
        if (res.toString().length === pow) {
            ary.push(res)
        }
    }
    return ary
}

var final = []
for(let i = 1; i <= 50; i++) {
    let res = getPowNumbers(i)
    final = final.concat(res)
}

console.log('Result is: ' + final.length)
console.log('In sceonds: ' + timer.getTime() / 1000)
