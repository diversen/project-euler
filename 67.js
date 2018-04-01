var triangle = require('./resources/triangle')
var getRows = require('./src/rows')
var rows = getRows(triangle).reverse()

function collapseRows (a, b) {

    var max = 0
    for(let i = 0; i < b.length ; i++) {
        max = Math.max(a[i], a[i + 1])
        b[i] = parseInt(b[i]) + max
    }
    return b
}

var res = []
var rowCurrent = Array.from(rows[0])

for(let i = 0; i < rows.length - 1; i++) {
    let rowNext = Array.from(rows[i + 1])
    rowCurrent = collapseRows(rowCurrent, rowNext)
    res.push(rowCurrent)
}

console.log('Result is: ' + res[res.length - 1])