function primeFactors (num, debug) {
    var factors = []

    // Current number
    var d = 2

    // Debug. In order to see how many iterations 
    // Used to find factorization
    var i = 0
    while (num > 1) {

        i++

        // Prime factor found
        if (num % d === 0) {
            factors.push(d)

            // Divide number with found prime factor and continue
            num = num / d
            continue
        }
        
        // Number d^2 being investigated is beyond num
        // Num is a prime
        if(d * d > num && num > 1) {
            factors.push(num)
            break;
        }

        d += 1
    }

    if (debug) {
        console.log(i)
    }
    return factors
}

module.exports = primeFactors