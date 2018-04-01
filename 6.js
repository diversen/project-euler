var num = 100

var sumSquare = 0
for (let i = 1; i <= num; i++ ) {
    sumSquare += Math.pow(i, 2)
}

console.log(sumSquare)

var numToSquare = 0
for (let i = 1; i <= num; i++ ) {
    numToSquare += i
}

console.log(numToSquare)

var squareSum = Math.pow(numToSquare, 2)
console.log(squareSum- sumSquare )


