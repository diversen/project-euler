var binomialCoefficent = require('./binomialCoefficient')

function getSign(x, y) {
    if (x*y < 0) {
        return '-'
    }
    return '+'
}
/**
 * E.g. (-x+y)^7
 * @param {*} x 
 * @param {*} y 
 * @param {*} pow 
 */
function binomialTheorem(x, y, pow) {
    var res = ''
    for(let i = 0; i <= pow; i++) {
        let coefficient = binomialCoefficent(pow, i)

        let toPowX = pow - i
        let toPowY = i

        let signX = Math.pow(x, toPowX) * coefficient
        let signY = Math.pow(y, toPowY)

        let sign = signX * signY
        if (sign > 0) {
            sign = '+' 
        } else {
            sign = '-'
        }

        res += sign + coefficient
        if (toPowX) {

            res += 'x' + '^' + toPowX
        }
        
        if (toPowY) {


            res += '*y' + '^' + toPowY
        }

    }
    return res
}

let res = binomialTheorem(1, -1, 5)
console.log(res)