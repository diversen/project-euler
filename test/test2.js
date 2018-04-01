// var max = 1000000
// console.log(Math.floor(max / 3))

var sieve = require('./src/sieve-of-eratosthenes')
// sieve(99)

// console.log([1,2,3].length)
// console.log(sieve(1000000).length)


var length = 1000000000

let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    
    setTimeout ( function() {
        // var testRange = new Array(length).fill(1)
        var testRange = new Float64Array(length)
        testRange.fill(1)
        resolve(testRange.length);
      }, 0);
    
    // setImmediate(function(){
        
      // resolve("Success!"); // Yay! Everything went well!
    // }, 250);
    // setTimeout(function(){
        // let res = sieve(length)
    //    resolve(res.length)
    //  }, 250);
    
  });




myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage);
});

console.log('ok')


/*
p = 0
for (let i = 0; i < 1000000000; i++) {
    p++
}

console.log(p)*/