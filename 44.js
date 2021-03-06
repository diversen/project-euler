/**
 * Pentagonal numbers are generated by the formula, Pn=n(3n−1)/2. The first ten
 * pentagonal numbers are:
 *
 * 1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...
 *
 * It can be seen that P4 + P7 = 22 + 70 = 92 = P8. However, their difference,
 * 70 − 22 = 48, is not pentagonal.
 *
 * Find the pair of pentagonal numbers, Pj and Pk, for which their sum and
 * difference are pentagonal and D = |Pk − Pj| is minimised; what is the value
 * of D?
 */

var timer = require('./src/timer')

function pentagonalNumber(n) {
    return n * (3 * n - 1) / 2
}

function sievePentagonal(n) {
    let res = []
    for (let i = 0; i < n; i++) {
        let num = pentagonalNumber(i)
        res.push(num)        
    }
    return res
}

var penta = sievePentagonal(2400)

// Hash-map
var pentaObj = {}
penta.forEach ( (elem) => {
    pentaObj[elem] = true
})

function testPentagonalDiif (n, m) {
    
    let sum = n + m
    if (pentaObj[sum] !== true) {
        return false
    }
    
    let diff = m - n
    if (pentaObj[diff] !== true) {
        return false
    }

    console.log('Result is the pair: ', n, m)
    console.log('D is: ' + diff)
    return true
}


first:
for(let i = 1; i < penta.length; i++) {
    for(let n = i; n < penta.length; n++ ) {
        if (n == penta.length) {
            break
        }
        if (i == n) continue
        if (testPentagonalDiif(penta[i], penta[n])) {
            break first
        }
    }
} 

console.log('In time: ' + timer.getTime() / 1000 + ' secs')

/** =>
Result is the pair:  1560090 7042750
D is: 5482660
In time: 0.099 secs
 */
