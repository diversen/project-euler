/** 
 * Hence the sequence of the first ten convergents for √2 are:
 *
 * 1, 3/2, 7/5, 17/12, 41/29, 99/70, 239/169, 577/408, 1393/985, 3363/2378, ...
 * What is most surprising is that the important mathematical constant, e = [2;
 * 1,2,1, 1,4,1, 1,6,1 , ... , 1,2k,1, ...].
 *
 * The first ten terms in the sequence of convergents for e are:
 *
 * 2, 3, 8/3, 11/4, 19/7, 87/32, 106/39, 193/71, 1264/465, 1457/536, ... The sum
 * of digits in the numerator of the 10th convergent is 1+4+5+7=17.
 *
 * Find the sum of digits in the numerator of the 100th convergent of the
 * continued fraction for e.
*/

// The nominator
// 2, 3, 8, 11, 19, 87, 106, 193, 1264, 1457,  
// Follows
// 2; 1, 2, 1,  1,  4,  1,   1,   6,     1 , … , 1,2k,1, …

// nk = ak * nk-1 + nk-2

// e.g.   3 = ak(1) * nk-1(2) +  nk-2(1)   = 3
// e.g.   8 = ak(2) * nk-1(3) +  nk-2(2)   = 8
// e.g.  11 = ak(1) * nk-1(8) +  nk-2(3)   = 11
// e.g. 106 = ak(1) * nk-1(87) + nk-2(19)  = 106
// e.g 1264 = ak(6) * nk-1(193)+ nk-2(106) = 1264

var arySum = require('./src/arySum')
var bigInt = require("big-integer")
var timer = require('./src/timer')

var akn = 0
var res = []
res.push(1, 2, 3)

for (let ak = 3; ak <= 100; ak++) {

    if (ak % 3 === 0) {
        akn += 2
        a = akn
    } else {
        a = 1
    }

    let n = bigInt(a).multiply(res[ak - 1]).add(res[ak - 2]).toString()
    res.push(n)
}

var result = arySum(res[100].split(''))
console.log('Result is: ' + result)
console.log('In seconds: '+ timer.getTime() / 1000)
