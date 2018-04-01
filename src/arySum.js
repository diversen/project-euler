/**
 * 
 * @param {ary} ary array of ints
 * @returns {int} sum int 
 */
function arySum (ary) {
    let sum = ary.reduce((a, b) => parseInt(a) + parseInt(b), 0)
    return sum
}

module.exports = arySum