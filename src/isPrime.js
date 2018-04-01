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

    // console.log(iterations)
    
    return true; // (in all other cases)
}


module.exports = isPrime