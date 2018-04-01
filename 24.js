/**
 * A permutation is an ordered arrangement of objects. For example, 3124 is one
 * possible permutation of the digits 1, 2, 3 and 4. If all of the permutations
 * are listed numerically or alphabetically, we call it lexicographic order. The
 * lexicographic permutations of 0, 1 and 2 are:
 *
 * 012   021   102   120   201   210
 *
 * What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4,
 * 5, 6, 7, 8 and 9?
 */

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
