var addInts = require('./src/addInts')

var prev = '0'
var current = '1'
var numTerm = 1

while(true) {
    
    let fibTerm = addInts(prev, current)
    prev = current
    current = fibTerm

    numTerm++

    if (fibTerm.length == 1000) {
        console.log(numTerm)
        console.log(fibTerm)
        break
    }
}
