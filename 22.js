var fetch = require ('node-fetch')
var wordValue = require('./src/wordValue')

var file = 'https://projecteuler.net/project/resources/p022_names.txt'

async function fetchFile () {

    var body = await fetch(file)
        .then(res => res.text())
        .then(body => { 
            return(body)
    })
    return body
    
}

var body = fetchFile()
body.then (data => parseFile(data))

function sum (ary) {
    ary.forEach( e => {
        console.log(e)
    })
}

function parseFile (data) {
    var names = data.replace(/['"]+/g, "").toLowerCase().split(',')
    names = names.sort(function(a, b){
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    })

    var i = 1
    var sum = 0
    names.forEach(element => {

        let arySum = wordValue(element)
        let elementSum = arySum.reduce ( (acc, val) => {
            return acc + val
        });

        sum += elementSum * i
        i++        
    });

    console.log(sum)
}


