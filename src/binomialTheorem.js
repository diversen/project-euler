var binomialCoefficent = require('./binomialCoefficient')

function getSign(x, y) {
    if (x*y < 0) {
        return '-'
    }
    return '+'
}
/**
 * E.g. (-x*-y)^7
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

        let powX = Math.pow(x, toPowX) 
        let powY = Math.pow(y, toPowY)

        let sign = powX * powY
        if (sign > 0) {
            sign = '+' 
        } else {
            sign = '-'
        }

        res += sign + Math.abs(coefficient * Math.pow(x, toPowX) * Math.pow(y, toPowY))
        if (toPowX) {
            res += 'x' + '^' + toPowX
        }
        
        if (toPowY) {
            res += '*y' + '^' + toPowY
        }

    }
    return res
}

let res = binomialTheorem(2, -7, 9)
console.log(res)