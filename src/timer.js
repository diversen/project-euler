function timer () {
    var start = new Date().getTime()

    this.getTime = function () {
        var end = new Date().getTime()
        var time = end - start
        return time
    }

    this.reset = function () {
        start = new Date().getTime()
    }
}

module.exports = new timer()