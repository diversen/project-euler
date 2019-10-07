/*

Euler 58

Starting with 1 and spiralling anticlockwise in the following way, a square
spiral with side length 7 is formed.

37 36 35 34 33 32 31
38 17 16 15 14 13 30
39 18  5  4  3 12 29
40 19  6  1  2 11 28
41 20  7  8  9 10 27
42 21 22 23 24 25 26
43 44 45 46 47 48 49

It is interesting to note that the odd squares lie along the bottom right
diagonal, but what is more interesting is that 8 out of the 13 numbers lying
along both diagonals are prime; that is, a ratio of 8 / 13 ≈ 62 %.

If one complete new layer is wrapped around the spiral above, a square spiral
with side length 9 will be formed.If this process is continued, what is the side
length of the square spiral for which the ratio of primes along both diagonals
first falls below 10 %?

*/

/* 
The spiral has the following pattern: 

After each round 8 more numbers are added:

1. square is [2- 9 ] -> + 8 numbers
-  4sides, numbers per side = 8 / 4 = 2

2. square is [10-25] -> + 8 numbers
-  4 sides, numbers per side = 16 / 4 = 4

3. square is [26-49] -> + 8 numbers
-  4 sides, numbers per side = 24 / 4 = 6

4. square is [50-31] -> + 8 numbers
-  4 sides, numbers per side = 32 / 4 = 8

*/
var sideLength = 1;
var primeCount = 0;
var count = 1;
var breakPoint = false;

var isPrime = require('./src/isPrime')

function iterateSqure(begin, interval) {

    sideLength += 2;
    for(let i = 1; i <= 4; i++ ) {
        begin += interval;

        if (isPrime(begin)) {       
            primeCount++;
        }

        count++;
        
        if ( (primeCount / count) < 0.1) {
            
            console.log("Sidelength: " + sideLength)
            console.log("Largest number: " + begin);
            console.log("Primes: " +primeCount, "Out of:" + count, "Ration: " + primeCount/count)
            breakPoint = true;
        }
    }
}

function iterateToSidelength () {
    var startPoint = 1;
    var i = 1;
    while(true) {
        iterateSqure(startPoint, 2*i);
        startPoint += i * 8;
        i++;
        if (breakPoint) {
            break;
        }
    }
    
}

iterateToSidelength();
