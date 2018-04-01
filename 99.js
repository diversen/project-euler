var baseExpStr = require('./resources/baseExp')
var lines = baseExpStr.split('\n')

function expAsLog10 (a, b) {
    return b*Math.log10(a)
}

var max = 0
var maxLineNum = 0
var i = 1
lines.forEach( (v) => {
    let baseExp = v.split(',')
    let res = expAsLog10(baseExp[0], baseExp[1])
    if (res > max) {
        max = res
        maxLineNum = i
    }
    i++
    console.log(res)
})

console.log(maxLineNum)

