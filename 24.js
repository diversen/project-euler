function swap(a, x, y) {
    let ary = a.split('')
    let temp = ary[x]
    ary[x] = ary[y]
    ary[y] = temp
    return ary.join('')
}

var c = 0
var res = []

function permutate(a, l, r, max) {

    if (l == r) {
        res.push(a)
    } else {

        for (let i = l; i <= r; i++) {
            a = swap(a, l, i);
            permutate(a, l + 1, r, max);
            if (c == max) {
                break
            }
        }
    }

    return res
}

var res = permutate('0123456789', 0, 9, 1000000);
console.log('Result is: ' + parseInt(res[999999]))
