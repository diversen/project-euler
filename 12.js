// What is the value of the first triangle number to have over five hundred divisors?
var getNumDivisors = require('./src/numDivisors')

function getTriangleNum(num) {
    var sum = 0
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}

var sum = 0
var i = 0
while(true) {
    i++
    sum += i

    let divisors = getNumDivisors(sum)
    
    if (divisors > 500) {
        console.log(sum)
        break
    }
}

