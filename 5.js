var num = 2520

var ary = Array.from({length: 20}, function (val, i) {
    return ++i
});

function isPrime (num) {
    var res = true
    for(let i = 2; i < num; i++) {
        if (num%i === 0) {
            res = false
            break
        }
    }
    return res
}

function factorizeComposite (num) {
    if (isPrime(num)) {
        return num
    }

    var initNum = num
    var str = ''
    var val = 1
    var i = 2
    while(i) {
        if (isPrime(i)) {
            if (num%i === 0) {
                val = val * i
                num = num / i
                str += i.toString() + ' '
                if (val === initNum) {
                    return str
                }
                continue
            }
        }
        i++      
    }
    return str
}

// console.log(isPrime(120))
console.log(factorizeComposite(111111111)) 

function isDivisible (num) {
    
    var res = false
    for(let val of ary) {
        if (num % val !== 0) {
            return false
        }
    }
    return true
}

// console.log(isDivisible(2520))

/*
var i = 1
while(i) {
    if (isDivisible(i)) {
        console.log(i)
        break
    }
    i++
}*/
