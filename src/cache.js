/** 
 * Simple memory cache
 */
var cache = new Map()

function has (key) {
    return cache.has(JSON.stringify(key))
}

function get (key) {
    return cache.get(JSON.stringify(key))
}

function set (key, val) {
    cache.set(JSON.stringify(key), val)
}

module.exports = {
    has: has,
    get: get,
    set: set
}