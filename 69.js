var sieveTotients = require('./src/sieveTotients')
var timer = require('./src/timer')
var totients = sieveTotients(1000000)

var max = 0
var vars = {}
for(let i = 0; i < totients.length; i++) {
    let localMax = i / totients[i]
    if (localMax > max) {
        max = localMax
        vars = {max, num: i}
    }
}
console.log('Result is: ' + vars.num)
console.log('Time in seconds: ' + timer.getTime() / 1000)
