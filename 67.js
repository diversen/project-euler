/**
 * By starting at the top of the triangle below and moving to adjacent numbers
 * on the row below, the maximum total from top to bottom is 23.
 *
 *
 * That is, 3 + 7 + 4 + 9 = 23.
 *
 * Find the maximum total from top to bottom in triangle.txt (right click and
 * 'Save Link/Target As...'), a 15K text file containing a triangle with
 * one-hundred rows.
 *
 * NOTE: This is a much more difficult version of Problem 18. It is not possible
 * to try every route to solve this problem, as there are 299 altogether! If you
 * could check one trillion (1012) routes every second it would take over twenty
 * billion years to check them all. There is an efficient algorithm to solve it.
 * ;o)
 */
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