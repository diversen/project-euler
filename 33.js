var gcd = require('./src/gcd')
var fractionEqual = require('./src/fraction').fractionEqual
var fractionMultiply = require('./src/fraction').fractionMultiply
var removeElement = require('./src/ary').removeElement
var fractionReduce = require('./src/fraction').fractionReduce
var timer = require('./src/timer')

l = console.log

function checkFraction(f) {

    if (f.d % 10 === 0 || f.n % 10 === 0) {
        return false
    }

    let sn = f.n.toString().split('')
    let sd = f.d.toString().split('')

    // Iterate each element
    var test = false
    for(let i = 0; i < sn.length; i++) {
        if (sd.includes(sn[i])) {

            let n = removeElement(sn, sn[i])
            let d = removeElement(sd, sn[i])

            if (n.length !== 0 && d.length !== 0 && parseInt(n[0]) > 0 && parseInt(d[0]) > 0) {
                let comp = { n: parseInt(n[0]), d: parseInt(d[0])}

                if (comp.n == comp.d) {
                    continue
                }

                if (comp.n > comp.d) {
                    continue
                }

                if (fractionEqual(comp, f)) {
                    return comp
                }
            }
        }
    }

    return false

}

var product = 1
var res = {n: 1, d: 1}
var fractions = []

// nominator
for (let n = 10; n < 99; n++) {
    // Denominator
    for (let d = 10; d < 99; d++) {

        let f = { n: n, d: d }
        
        let check = checkFraction(f)
        
        if (check) {
            res = fractionMultiply(res, check)
            fractions.push(f)
        }
    }
}

l('Fractions are: ')
l(fractions)
l('Result is: ')
let reduced = fractionReduce(res)
l (reduced.d)
l('In seconds: ' + timer.getTime() / 1000)
