/**
 * Starting in the top left corner of a 2×2 grid, and only being able to move to
 * the right and down, there are exactly 6 routes to the bottom right corner.
 *
 * How many such routes are there through a 20×20 grid?
 */


function binomialCoefficient (n, k) {
    var dividend = factorial(n)
    var divisor = factorial(n - k) * factorial(k)
    return parseInt(dividend / divisor)
}

function factorial (num) {
    var res = 1
    while (num) {
        res *= num--
    }
    return res
}

function latticePathCube(width) {
    var pathLength = width * 2 - 1
    return binomialCoefficient(pathLength, width) * 2
}

console.log("Result is: " + latticePathCube(20))