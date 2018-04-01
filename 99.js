/** 
 * Comparing two numbers written in index form like 211 and 37 is not difficult,
 * as any calculator would confirm that 211 = 2048 < 37 = 2187.
 *
 * However, confirming that 632382518061 > 519432525806 would be much more
 * difficult, as both numbers contain over three million digits.
 *
 * Using base_exp.txt (right click and 'Save Link/Target As...'), a 22K text
 * file containing one thousand lines with a base/exponent pair on each line,
 * determine which line number has the greatest numerical value.
 *
 * NOTE: The first two lines in the file represent the numbers in the example
 * given above.
*/

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

console.log('Result is: ' + maxLineNum)

