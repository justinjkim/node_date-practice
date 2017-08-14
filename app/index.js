var moment = require('moment');
const chalk = require('chalk');
const log = console.log;



var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
log("It is " + chalk.blue(now));


var now_day = moment().format("DDDo");
log("It is the " + chalk.magentaBright(now_day) + " day of the year.");


var rightNow = moment();
// midnight
var startOfDay = moment().clone().startOf('day');
// Difference in seconds
var now_seconds = rightNow.diff(startOfDay, 'seconds');
log("It is " + chalk.cyanBright(now_seconds) + " seconds into the day.");


var now_DS = moment().isDST();
if (now_DS) {
	log("It " + chalk.yellowBright("is ") +  "during Daylight Savings Time.");
}
else {
	console.log("It is not during Daylight Savings Time.");
}


var now_leap = moment().isLeapYear();
if (now_leap) {
	console.log("It is a leap year.");
}
else {
	log("It " + chalk.red("is not ") + "a leap year.");
}