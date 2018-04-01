/** 
 * Using names.txt (right click and 'Save Link/Target As...'), a 46K text file
 * containing over five-thousand first names, begin by sorting it into
 * alphabetical order. Then working out the alphabetical value for each name,
 * multiply this value by its alphabetical position in the list to obtain a name
 * score.
 *
 * For example, when the list is sorted into alphabetical order, COLIN, which is
 * worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN
 * would obtain a score of 938 × 53 = 49714.
 *
 * What is the total of all the name scores in the file?
*/

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

    console.log('Result is: ' + sum)
}
