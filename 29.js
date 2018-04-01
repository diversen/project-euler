
var bigInt = require("big-integer")
var max = 100
var ary = []
for (a = 2; a <= max; a++ ) {
    for(b = 2; b <= max; b++) {
        let res = bigInt(a).pow(b).toString()
        if (ary.indexOf(res) === -1) {
            ary.push(res)
        }
    }
    console.log('a:', a)
}

console.log(ary.length)
