var res = []
var set = {}

/**
 * Get products from an array 
 * Given the array [ 2, 3, 23 ] the function will return
 * possible products of the 3 numbers => 
 * [ 2, 6, 138, 46, 3, 69, 23 ]
 * @param {array} ary array of ints
 * @param {int} idx next index
 * @param {int} product 
 */
function productsFromAry(ary, idx, product) {
    if (!idx) idx = 0
    if (!product) product = 1
    for(let i = idx; i < ary.length; i++) {
        let currentRes = product * ary[i]
        if (set[currentRes] === undefined) {
            res.push(currentRes)
            set[currentRes] = true
        }
        productsFromAry(ary, i+1, product * ary[i])
    }
    return res.sort((a, b) => a - b)
}

module.exports = productsFromAry