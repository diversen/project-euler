
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

console.log(latticePathCube(20))