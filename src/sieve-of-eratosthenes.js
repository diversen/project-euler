// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

function sieve(ary, num) {

    let iterations = Math.ceil(ary.length / num)
    for(let i = 2; i < iterations; i++ ) {
        
        // sieve i'th multiple of num
        ary[i*num] = undefined
    }
    return ary
   
}

function sieveOfEratosthenes(length) {

    var testRange = new Array(length + 1).fill(1)
    for (let i = 2; i < length; i++) {
        
        if (Math.pow(i, 2) > length) {
            break
        }

        if (testRange[i] === undefined) {
            continue
        }

        testRange = sieve(testRange, i)
    }

    var ret = []
    for(let i = 2; i < testRange.length; i++) {
        if (testRange[i] === undefined) {
            continue
        }
        ret.push(i)
    }
    return ret

}

module.exports = sieveOfEratosthenes
