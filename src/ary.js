function removeElement (ary, value) {
    return ary.filter(item => item !== value)
}

module.exports = {
    removeElement: removeElement
}