/**
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?
 */

var range = require('range').range
var arySum = require('./src/arySum')
var timer = require('./src/timer')

function filterAryArySum (ary, max, min) {
    if (!min) min = 0
    return ary.filter ( (v, i) => {
        let sum = arySum(Array.from(v))
        if (sum > max || sum < min ) {
            return false
        } else {
            return true
        }
    })
}

function toArrayOfArrays (ary) {
    var ret = []
    ary.forEach ( v => {
        ret.push([v])
    })
    return ret
}

function permutate (init, perm) {

    if (init.length === 0) {
        return perm
    }

    if (init[0].constructor !== Array) {
        init = toArrayOfArrays(init)
    }
    
    var ret = []
    for(i = 0; i < init.length; i++) {
        for(p = 0; p < perm.length; p++) {
            let tmp = init[i].slice()
            tmp.push(perm[p])
            if (arySum(tmp) > 200) {
                continue
            }
            ret.push(tmp)   
        }
    }
    return ret
}

var coins = [1, 2, 5, 10, 20, 50, 100, 200]
var coinOpts = []

// generate array of all options
coins.reverse().forEach ( v => coinOpts.push(range(0, 200+1, v)))

var res = []
for(let i = 0; i < coinOpts.length; i++) {
    res = permutate(res, coinOpts[i])
}

// Quite slow solution. About 20 secs
res = filterAryArySum(res, 200, 200)
console.log('Result is: ' + res.length)
console.log('Finised in: ' + timer.getTime() / 1000 + ' secs')
