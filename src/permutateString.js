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
}

module.exports = permutate