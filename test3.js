/*
var r = require("range").range
r(100000000)*/

var f = require('./src/factorial')

var permutate = require('./src/permutate')

var test = [0,1,2]
var res = permutate(test,test)
res = permutate(res, test)
console.log(res.length)
console.log(res)

