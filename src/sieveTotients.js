/** 
 * Readable version of a totient sieve
*/
var primeSieve = require('./sieve-of-eratosthenes')

function sieve (totients, num) {
    

    // If prime. Then totient is = -1 of the prime
    totients[num]--

    // Calculate number of iterations of num
    let iterations = Math.ceil(totients.length / num)
    for(let i = 2; i < iterations; i++ ) {

        // Use eulers totient function
        // φ(n) = n *(1 - 1/p1)* ... (1 - 1/pn).
        totients[i*num] = totients[i*num] * (1 - (1/num))
    }
    // return totients
}

function sieveTotients (length) {
    
    // Primes
    var primes = primeSieve(length)

    // Initialize
    var totients = []
    for(let i = 0; i <= length; i++) {
        totients.push(i) 
    }

    // Sieve
    for(let i = 0; i < primes.length; i++) {
        sieve(totients, primes[i]) 
    }
    
    // Parse integers. Some numbers may be like 6.0000000 ...
    totients.forEach( (v, i) => {
        totients[i] = parseInt(v)
    })

    return totients
}

module.exports = sieveTotients
