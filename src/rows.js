function getAsRows (str) {

    var stringArys = str.split('\n')
    var rows = []

    for(let i = 0; i < stringArys.length; i++) {
        rows.push(stringArys[i].split(' '))
    }
    return rows
}

module.exports = getAsRows