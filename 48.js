var bigInt = require("big-integer")
var sum = 0
for(i = 1; i <= 1000; i++) {
	var res = bigInt(i).pow(i)
    sum = bigInt(sum).add(res)	
}

console.log(sum.toString(10))
