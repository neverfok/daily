// Build with:
// $ uglifyjs bookmarklet.js --wrap --screw-ie8 --preamble 'javascript:' --mangle | tr -d "\n"
//
// If you don't have uglify:
// $ npm install uglify-js -g
//
// Install in chrome by right-clicking the url bar ("omnibox") and then choosing "Edit search engines"
var dayAbbrs   = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var weekStarts = [
  ["2016-02-01", "week-01"],
  ["2016-02-08", "week-02"],
  ["2016-02-15", "week-03"],
  ["2016-02-22", "week-04"],
  ["2016-02-29", "week-05"],
  ["2016-03-07", "week-06"],
  ["2016-03-14", "week-07"],
  ["2016-03-21", "week-08"],
  ["2016-03-28", "week-09"],
  ["2016-04-04", "week-10"],
  ["2016-04-11", "week-11"],
  ["2016-04-18", "week-12"],
  ["2016-04-25", "week-13"],
  ["2016-05-02", "week-14"],
  ["2016-05-09", "week-15"],
  ["2016-05-16", "week-16"],
];

var today    = new Date();
var year     = today.getUTCFullYear().toString();
var month    = (1+today.getUTCMonth()).toString();
if(month.length == 1) month = '0'+month;
var day      = today.getUTCDate().toString();
var dayAbbr  = dayAbbrs[today.getUTCDay()];
var filename = year+'-'+month+'-'+day+'-'+dayAbbr+'.md';

var weekIndex = 0;
weekStarts.forEach(function(pair, index) {
  if(weekIndex !== 0) return;
  var weekStart = new Date(Date.parse(pair[0]));
  if(today < weekStart) weekIndex = index-1;
});

var week = weekStarts[weekIndex][1];
var url  = 'https://github.com/CodePlatoon/daily/blob/master/'+week+'/'+filename;

window.location = url;
