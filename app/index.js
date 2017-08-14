var moment = require('moment');

moment().format();
console.log(moment().format()); 

var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log("It is " + now);

var now_day = moment().format("DDDo");
console.log("It is the " + now_day + " day of the year.");

var now_seconds = moment().format("SSSSS");
console.log("It is " + now_seconds + " seconds into the day.");


var now_DS = moment().isDST();
if (now_DS) {
	console.log("It is during Daylight Savings Time.");
}
else {
	console.log("It is not during Daylight Savings Time.");
}
