// From https://stackoverflow.com/questions/188425/is-there-a-simple-algorithm-that-can-determine-if-x-is-prime-and-not-confuse-a#193589
// Ported from C

var iterations = 0
function isPrime(n)
{
    if (n <= 1) return false;       // 1 and 0 is not prime
    if (n < 4) return true;         // 2 and 3 are both prime
    if ((n % 2) == 0) return false; // exclude even numbers
    if (n < 9) return true;         // we have already excluded 4, 6, and 8.
    if ((n % 3) == 0) return false; // exclude remaining multiples of 3

    let r = Math.floor( Math.sqrt(n) );
    let f = 5;
    while (f <= r)
    {
        iterations++
        if ((n % f) == 0)  return false;
        if ((n % (f + 2)) == 0) return false;
        f = f + 6;
        
    }
    
    return true; // (in all other cases)
}

var max = 1000000
primes = []
for(let i = 0; i < max; i++) {
    if (isPrime(i)) {
        primes.push(i)
    }
}

var ary = {1: 1,2:2,3:3,4:4,5:5}
console.log(ary)
delete ary['1']

console.log(ary)



console.log(iterations)
console.log(primes.length)

var sieve = require('./sieve-of-eratosthenes')
primes = sieve(max)
// console.log(primes)


/*
console.log(primes)
var primes2 = sieve(max)
console.log(primes2)
console.log(primes2.length)
*/