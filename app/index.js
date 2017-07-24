const moment = require('moment');
const chalk = require('chalk');
moment().format();

let now = moment()

console.log("It is " + chalk.blue(now.format("dddd, MMMM Do YYYY, h:mm:ss a")) + ".")
console.log("It is the " + chalk.magentaBright(now.dayOfYear()) + "th day of the year.")
console.log("It is "+ chalk.greenBright(findSeconds(now)) +" seconds into the day.")
console.log("It " + findDaylight(now) + " during Daylight Savings Time.")
console.log("It " + findLeapYear(now) + " a leap year.")

function findSeconds(now) {
    let seconds = 0
    seconds += +now.format("H") * 60 * 60
    seconds += +now.format("m") * 60
    seconds += +now.format("s")
    return seconds
}

function findDaylight(now) {
    if(now.isDST()){
        return chalk.green("is")
    } else {
        return chalk.red("is not")
    }
}
function findLeapYear(now) {
    if(now.isLeapYear()){
        return chalk.green("is")
    } else {
        return chalk.red("is not")
    }
}