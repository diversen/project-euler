function toArrayOfArrays (ary) {
    var ret = []
    ary.forEach ( v => {
        ret.push([v])
    })
    return ret
}

/**
 * Permutate init and perm
 * e.g. permuate([1,2,3], [1,2,3])
 * @param {array} init 
 * @param {array} perm 
 */
function permutate (init, perm) {

    if (init.length === 0) {
        return perm
    }

    if (init[0].constructor !== Array) {
        init = toArrayOfArrays(init)
    }
    
    var ret = []
    for(i = 0; i < init.length; i++) {
        
        for(p = 0; p < perm.length; p++) {
            let tmp = init[i].slice()

            tmp.push(perm[p])
            ret.push(tmp)   
        }
    }
    return ret
}

module.exports = permutate