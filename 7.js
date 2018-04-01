function isPrime (num, from) {
    if (!from) from = 2
    var res = true
    for(let i = 2; i < num; i++) {
        if (num%i === 0) {
            res = false
            break
        }
    }
    return res
}

var i = 2
var numPrime = 0
var searchFrom = 2
var findPrime = 10001
while (true) {
    if (isPrime(i, searchFrom)) {
        searchFrom = i
        numPrime++
    }

    if (numPrime == findPrime) {
        console.log(i)
        break
    }
    i++
}

