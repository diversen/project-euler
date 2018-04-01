/** 
 * The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1);
 * so the first ten triangle numbers are:
 *
 * 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
 *
 * By converting each letter in a word to a number corresponding to its
 * alphabetical position and adding these values we form a word value. For
 * example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value
 * is a triangle number then we shall call the word a triangle word.
 *
 * Using words.txt (right click and 'Save Link/Target As...'), a 16K text file
 * containing nearly two-thousand common English words, how many are triangle
 * words?
*/

var fetch = require ('node-fetch')
var wordValue = require('./src/wordValue')
var triangleFormula = (n) => 1/2*n*(n+1)
var arySum = require('./src/arySum')

var tWords = {}
for(let i = 0; i < 50; i++) {
    tWords[triangleFormula(i)] = 1
}

var file = 'https://projecteuler.net/project/resources/p042_words.txt'

async function fetchFile () {

    var body = await fetch(file)
        .then(res => res.text())
        .then(body => { 
            return(body)
    })
    return body
    
}

function trimData(data) {
    var names = data.replace(/['"]+/g, "").toLowerCase().split(',')
    names = names.sort(function(a, b){
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    })
    return names
}

var body = fetchFile()
body.then (data => parseFile(data))

function parseFile (data) {
    
    var words = trimData(data)
    var total = 0
    words.forEach(element => {

        let a = wordValue(element)
        let sum = arySum(a)

        if (tWords[sum] !== undefined) {
            total++
        }
    });

    console.log('Result: ' + total)
    
}
