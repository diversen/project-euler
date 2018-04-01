/**
 * You are given the following information, but you may prefer to do some
 * research for yourself.
 *
 * 1 Jan 1900 was a Monday. Thirty days has September, April, June and November.
 * All the rest have thirty-one, Saving February alone, Which has twenty-eight,
 * rain or shine. And on leap years, twenty-nine. A leap year occurs on any year
 * evenly divisible by 4, but not on a century unless it is divisible by 400.
 * How many Sundays fell on the first of the month during the twentieth century
 * (1 Jan 1901 to 31 Dec 2000)?
 */
 

function getFeb(year) {
    res = 28
    if (year % 4 === 0) {
        res = 29
    }
    if (year % 100 === 0) {
        res = 28
    }
    if (year % 400 === 0) {
        res = 29
    }
    return res
}

function getDaysInYear(year) {
    var days = 30*4 + 31*7 + 28
    if (getFeb(year)) {
        days +=1
    }
    return days
}

function getMonthsOfYear (year) {
    return [
        31,
        getFeb(year),
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ]
}

var d = 1

function getMonthsDaysInYear (year) {
    var months = getMonthsOfYear(year)
    var monthAndDays = []

    for(let m = 0; m < months.length; m++) {
        
        let length = months[m]
        let daysInMonth = []
        while(length) {
            daysInMonth.push(d)
            if (d % 7 ===0){
                d = 0
            }
            d++
            length--
        }

        monthAndDays.push(daysInMonth)
    }
    return monthAndDays
}

var sundays = 0
for(let y = 1900; y <= 2000; y++) {
    let months = getMonthsDaysInYear(y)
    for(let m = 0; m < months.length; m++) {
        if (months[m][0] == 7 && y > 1900) {
            sundays++
        }
    }
}

console.log("Result is: " + sundays)