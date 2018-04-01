/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for
 * which,
 *
 * a2 + b2 = c2 For example, 32 + 42 = 9 + 16 = 25 = 52.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find
 * the product abc.
*/

function isTriplet (a,b,c) {
    return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)
}

function createTriplet(m, n) {
    var a = Math.pow(n, 2) - Math.pow(m, 2)
    var b = 2*n*m
    var c = Math.pow(n, 2) + Math.pow(m, 2)

    return {
        a: a,
        b: b,
        c: c
    }
}

var triplet = createTriplet(250, 300)

// 100 is just a guess
for (m = 1; m < 100; m++) {
    for (n = m + 1; n < 100; n++) {
        var triplet = createTriplet(m, n)
        var sum = triplet.a + triplet.b + triplet.c 
        if (sum == 1000) {

            console.log('Result is: ' + triplet.a*triplet.b*triplet.c)
        }
    }
}
