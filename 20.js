var factorial = require('./src/factorial')

var fact = factorial(100)
var ary = fact.split('')

var res = 0
ary.forEach( v => {
    res += parseInt(v)
})

console.log(res)