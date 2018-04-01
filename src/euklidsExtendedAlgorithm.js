/*

See: https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm

In arithmetic and computer programming, the extended Euclidean algorithm is an
extension to the Euclidean algorithm, and computes, in addition to the greatest
common divisor of integers a and b, also the coefficients of Bézout's identity,
which are integers x and y such that

ax + by = gcd(a, b)

http://www.oxfordmathcenter.com/drupal7/node/58

*/

/**
 * Example e.g. gcd(1239,168) = 21
 * euklidsExtendedAlgorithm(1239, 168) = { x: 3, y: -22 }
 * Therefor: 3*1239 + (168*-21) = 21
 * @param {int} a e.g. 1239
 * @param {int} b e.g  168
 * @returns {object} {x:x, y:y}
 */
function euklidsExtendedAlgorithm(a, b) { 
    
    var q = 0, x = 0, y = 1, xLast = 1, yLast = 0;
    while (b !== 0) {

        // q←a div b
        // (a,b)←(b,a mod b)
        // (x,xlast)←(xlast−q⋅x,x)
        // (y,ylast)←(ylast−q⋅y,y)
        
        q = Math.floor(a / b);

        let tmp = a % b
        a = b
        b = tmp

        tmp = xLast - q * x
        xLast = x
        x = tmp

        tmp = yLast - q * y
        yLast = y
        y = tmp

    }
    return {x: xLast, y: yLast}
}

module.exports = euklidsExtendedAlgorithm