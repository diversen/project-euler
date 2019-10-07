// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

/**
 * Sieve array of numbers
 * @param {array} ary 
 * @param {int} num 
 */
function sieve(ary, num) {

    let iterations = Math.ceil(ary.length / num)
    let res = []
    for(let i = 2; i < iterations; i++ ) {
        
        // sieve out i'th multiple of current num
        ary[i*num] = undefined
    } 
}

/**
 * Get all primes up to num, e.g. 1000000
 * @param {int} length 
 */
function sieveOfEratosthenes(length) {

    var t = 0;
    var testRange = new Array(length + 1).fill(1)
    for (let i = 2; i < length; i++) {
        
        if (Math.pow(i, 2) > length) {
            break
        }
        
        // No need to sieve numbers which has been sieved out
        if (testRange[i] === undefined) {
            continue
        }

        sieve(testRange, i)
    }

    var ret = []

    // Get all primes. All ints which are not undefined. 
    for(let i = 2; i < testRange.length; i++) {
        if (testRange[i] === undefined) {
            continue
        }
        ret.push(i)
    }
    return ret

}

module.exports = sieveOfEratosthenes
