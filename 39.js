/** 
 * If p is the perimeter of a right angle triangle with integral length sides,
 * {a,b,c}, there are exactly three solutions for p = 120.
 *
 * {20,48,52}, {24,45,51}, {30,40,50}
 *
 * For which value of p ≤ 1000, is the number of solutions maximised?
*/

var timer = require('./src/timer')

const p = Math.pow
const s = Math.sqrt

var getPerimeterFromAB = ( (a,b) => { 
    return a + b + s(p(a, 2) + p(b, 2))
})

function getSolutions (max) {
    var solutions = []
    for (let a = 1; a < max; a++) {
        for(let b = 1; b < max; b++) {
            let perimeter = getPerimeterFromAB(a,b)
            
            if (perimeter > max) {
                break;
            }

            if (perimeter == max) {
                let c = max - a - b
                let solution = { a: a, b: b, c: c}
                solutions.push(solution)
            }
        }
        
    }
    return solutions
}

var iterations = 1000
var max = 0
var maximized
for(let i = 1; i <= iterations; i++ ) {
    
    let l = getSolutions(i).length
    if (l > max) {
        max = l
        maximized = i
    }
}

console.log('Maximized: ' + maximized, max / 2)
console.log('In time: ' + timer.getTime() / 1000)

/** =>
Maximized: 840 8
In time: 0.336
 */

