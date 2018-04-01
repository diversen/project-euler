var permutate = require('./src/permutateString')
var timer = require('./src/timer')

var gen = permutate('0123456789', 0, 9);
var max = 1000000

for (i = 1; i <= max; i++) {
    if (i == max) {
        console.log("Result is: " + gen.next().value);
        break
    }
    gen.next()
}

console.log("In time " + timer.getTime() / 1000)