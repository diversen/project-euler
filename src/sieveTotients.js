var primeSieve = require('./sieve-of-eratosthenes')

function sieve (totients, num) {
    let iterations = Math.ceil(totients.length / num)

    totients[num]--
    for(let i = 2; i < iterations; i++ ) {
        totients[i*num] = totients[i*num] * (1 - (1/num))
    }
    return totients
}

function sieveTotients (length) {
    
    var primes = primeSieve(length)

    var totients = []
    for(let i = 0; i <= length; i++) {
        totients.push(i) 
    }
    
    for(let i = 0; i < primes.length; i++) {
        totients = sieve(totients, primes[i]) 
    }
    
    totients.forEach( (v, i) => {
        totients[i] = parseInt(v)
    })
    return totients
}

module.exports = sieveTotients