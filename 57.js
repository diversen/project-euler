/** 
 * It is possible to show that the square root of two can be expressed as an
 * infinite continued fraction.
 *
 * √ 2 = 1 + 1/(2 + 1/(2 + 1/(2 + ... ))) = 1.414213...
 *
 * By expanding this for the first four iterations, we get:
 *
 * 1 + 1/2 = 3/2 = 1.5 1 + 1/(2 + 1/2) = 7/5 = 1.4 1 + 1/(2 + 1/(2 + 1/2)) =
 * 17/12 = 1.41666... 1 + 1/(2 + 1/(2 + 1/(2 + 1/2))) = 41/29 = 1.41379...
 *
 * The next three expansions are 99/70, 239/169, and 577/408, but the eighth
 * expansion, 1393/985, is the first example where the number of digits in the
 * numerator exceeds the number of digits in the denominator.
 *
 * In the first one-thousand expansions, how many fractions contain a numerator
 * with more digits than denominator?
*/

var fractionAdd = require('./src/fractionBigint').fractionAdd
var cache = require('./src/cache')
var timer = require('./src/timer')

var t = 0

function rootExpansion (n) {

    let b = {n: 2, d: 1}
    let c = {n: 1, d: 2}
    for(let i = 1; i < n; i++) {
        
        if (cache.has([b, c])) {
            tmp = cache.get([b, c])
        } else {
            tmp = fractionAdd(b, c)
            cache.set([b, c], tmp)
        }

        c.n = tmp.d
        c.d = tmp.n
    }

    let last = {n: 1, d:1}
    let res = fractionAdd(last, c)
    return res
}

var sum = 0
function expand () {
    for(let i = 1; i <= 1000; i++) {
        let res = rootExpansion(i)
        if (res.n.length > res.d.length) {
            sum++
        }
    }
}

expand()
console.log("Result: " + sum)
console.log("In seconds: " + timer.getTime() / 1000)

/**
 * Quite slow. But it calculates the exact square root expansions
 * It could have been done a lot faster.
 * 
 * Solved it by simplifing a nominator / denominator expression
 * like this: 
 * 
 * https://www.wolframalpha.com/input/?i=1+%2B+1%2F(2%2B1%2F(2+%2B+1%2F(2+%2B+1%2F(2+%2B+1%2F2))))
 * 
 * Result: 153 In seconds: 3.753
 */
