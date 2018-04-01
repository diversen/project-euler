function factorial (num) {
    var sum = 1    
    for(var i = 1; i <= num; i++) {
        sum*=i
    }
    return sum
}

function factorialSum (from, to, num) {
    var sum = 0
    for(var i = from; i <= to; i++ ) {
        sum+=factorial(num - i)
    }
    return sum
}

// console.log(factorial(3))
var res = factorialSum(1, 5, 7)
console.log(res % 7)