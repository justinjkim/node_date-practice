var moment = require('moment');

moment().format();
console.log(moment().format()); 

var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log("It is " + now);

