var timer = require('./src/timer')
/*
function swap(a, x, y) {
    let ary = a.split('')
    let temp = ary[x]
    ary[x] = ary[y]
    ary[y] = temp
    return ary.join('')
}

var c = 0
var res = []

function *permutate(a, l, r) {
    if (l == r) {
		yield a
    } else {
        for (let i = l; i <= r; i++) {
            a = swap(a, l, i);
            yield *permutate(a, l + 1, r);
        }
    }
    return res
}*/

var permutate = require('./src/permutateString')

var gen = permutate('0123456789', 0, 9);
var max = 1000000

for (i = 1; i <= max; i++) {
    if (i == max) {
        console.log("Result is: " + gen.next().value);
        break
    }
    gen.next()
}

console.log("In time " + timer.getTime() / 1000)