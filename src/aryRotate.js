// https://stackoverflow.com/questions/1985260/javascript-array-rotate
function aryRotate(arr, reverse){
    if(reverse) {
      arr.unshift(arr.pop())
    } else {
      arr.push(arr.shift())
    }
    return arr
} 
module.exports = aryRotate