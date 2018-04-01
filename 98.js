var readFile = require('read-text-file')
var wordValue = require('./src/wordValue')
var arySum = require('./src/arySum')
var data = readFile.readSync('./resources/p098_words.txt')

// YYY

function parseWordFile (data) {
    let names = data.replace(/['"]+/g, "").toLowerCase().split(',')
    names = names.sort(function(a, b){
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    })
    return names
}

function getNameValue (name) {
    let testWord = name
    let testValue = wordValue(testWord)
    return parseInt(testValue.join(''))
}

names = parseWordFile(data)





for(let i = 0; i < names.length; i++) {

    let val = getNameValue(names[i])
    let sq = Math.sqrt(val)
    if (Number.isInteger(sq)) {
        console.log(sq, names[i], val)
    } else {
        console.log(sq, names[i], val)
    }
    // console.log(testWord, testValue, testNum, Math.sqrt(testNum))
}


