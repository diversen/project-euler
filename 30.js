var p = Math.pow
var total = 0

// Power
var x = 5
var maxSum = 0

for(let i = 1; i <= 6; i++) {
    maxSum += p(9, x)
}

console.log('max: ' + maxSum)

var result = 0
for(let i = 2; i <= maxSum; i++) {
    let ary = i.toString().split('')

    let total = 0
    for (let num of ary) {
        total += p(num, x)
    }

    if (total === i) {
        console.log(i)
        result += i
    }
}

console.log('result: ' + result)