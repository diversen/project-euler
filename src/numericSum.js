module.exports = function numericSum (num) {
    var strNum = num.toString().split('')
    var res = strNum.reduce( (a, v) => {
        return parseInt(a) + parseInt(v)
    })
    return res
}