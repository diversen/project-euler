var timer = require('./src/timer')
/**
 * Triangle, pentagonal, and hexagonal numbers are generated by the following
 * formulae:
 *
 * Triangle Tn=n(n+1)/2     1, 3, 6, 10, 15, ... 
 * Pentagonal Pn=n(3n−1)/2  1, 5, 12, 22, 35, ... 
 * Hexagonal Hn=n(2n−1)     1, 6, 15, 28, 45, ... 
 * 
 * It can be verified that T285 = P165 = H143 = 40755.
 *
 * Find the next triangle number that is also pentagonal and hexagonal.
 */

// https://en.wikipedia.org/wiki/Polygonal_number

var triangle = (n) => 1/2*n*(n+1)
var pentagonal = (n) => 1/2*n*(3*n-1)
var hexagonal = (n) => n*(2*n-1)

/**
 * Get a polygonal number from num sides and number
 * @param {int} s sides
 * @param {int} n number
 * @returns {int} number the polygonal number
 */
function polygonalNumber(s, n) {
    return (Math.pow(n, 2)*(s-2) - n*(s-4)) / 2
}

/**
 * Reverse polygonal calculations
 * @param {int} s sides
 * @param {int} x polygonal number
 * @returns {int} number
 */
function polygonalNumberReverse (s, x) {
    return (
        Math.sqrt( (8* (s-2) *x ) + (Math.pow(s-4, 2)) ) + (s - 4)) / (2*(s-2))
}

// Note:
// Every hexagonal number is the (2n-1)^st triangular number
// The hexagonal number (143) = the triangle number (2*hexagonal-1), e.g:
// console.log(2*143-1)

var T = {}, P = {}, H = {}


for(let i = 1; i < 100000; i++) {
    let p = polygonalNumber(5, i)
    P[p] = i
    let h = polygonalNumber(6, i)
    H[h] = i
}

for(let p in P) {
    if (H[p]) {
        // Get triangle number from hexagonal number
        let t = 2*H[p] - 1
        if (t > 285) {
            console.log('T, P, H numbers are: ')
            console.log(t, P[p], H[p])
            console.log('Solution is ' + polygonalNumber(3,t))
            console.log('Found in seconds: ' + timer.getTime()/ 1000)   
        }
    }
}

// Much better solution - after reading the forum
// Using the quadratic formula

timer.reset()

let n = 1
while(true) {
  n += 1
  h=n*(2*n-1)
  k=(1+Math.sqrt(1+24*h))/6
  if (Number.isInteger(k) && k > 285) { 

      console.log('Using the quadratic formula: ' + h)
      console.log('Found in seconds:' + timer.getTime() / 1000)
      break
  }
}
