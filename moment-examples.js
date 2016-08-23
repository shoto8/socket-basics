var moment = require('moment');
var now = moment();

console.log(now.format());

//Unix timestamp
console.log(now.format('X'));
//JS Unix timestamp - more accurate because it uses milliseconds
console.log(now.format('x'));

console.log(now.valueOf());

var timestamp = 1471939066193;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));







console.log(now.format())

console.log(now.format('D MMM h:mma YYYY'));
