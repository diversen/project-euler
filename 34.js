var timer = require('./src/timer')
var intStrToAryInts = require('./src/intStrToAryInts')

function factorial (num) {
    var res = 1
    while (num) {
        res *= num--
    }
    return res
}

function sumAryFactorial (ary) {
    return ary.reduce ( (a, b) => {
        return a + factorial(b)
    }, 0)
}

var max = 40585 // Discovered after solution
var totalSum = 0
for (let i = 3; i <= max; i++) {
    let intAry = intStrToAryInts(i.toString())

    let sum = sumAryFactorial(intAry)
    if (intAry.join('') === sum.toString()) {
        totalSum += parseInt(sum)
        console.log('Found: :' + sum)

    }
}

console.log('Total: ' + totalSum)
console.log(timer.getTime() / 1000)