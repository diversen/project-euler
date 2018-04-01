/**
 * Generate a hash map from an array
 * @param {array} ary 
 * @returns {object} hash map
 */
function hashmapAry (ary) {
    var obj = {}
    ary.forEach( v => {
        obj[v] = v
    });
    return obj
}

module.exports = hashmapAry