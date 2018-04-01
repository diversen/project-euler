var multInts = require('./multInts')

function pow (num, pow) {
    num = num.toString()
    pow = pow.toString()
    var res = 1
    while(pow) {
        res = multInts(res, num)
        pow--
    }
    return res
}

module.exports = pow