function timer () {
    var start = new Date().getTime()

    /**
     * Get time in milli seconds
     */
    this.getTime = function () {
        var end = new Date().getTime()
        var time = end - start
        return time
    }

    /**
     * Get time in seconds
     */
    this.getTimeSecs = function () {
        var end = new Date().getTime()
        var time = end - start
        return time / 1000
    }

    /**
     * Reset timer
     */
    this.reset = function () {
        start = new Date().getTime()
    }
}

module.exports = new timer()