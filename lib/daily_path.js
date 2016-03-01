'use strict';
module.exports = dailyPath;

function dailyPath(daily) {
  var msInDay    = 1000*60*60*24;
  var dayAbbrs   = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  var weekStarts = [ // $ find . -type f -name '*-mon.md' | sed  -e 's|\./|  ["|'  -e 's|/|", "|'  -e 's|-mon\.md|"],|'
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


  // Default to today, or Monday, if its a weekend
  if(daily === undefined)  daily = new Date();
  if(daily.getDay() === 0) daily = new Date(daily-0 + 1*msInDay);
  if(daily.getDay() === 6) daily = new Date(daily-0 + 2*msInDay);

  // Format the date for the file name
  var year    = daily.getFullYear().toString();
  var month   = (1+daily.getMonth()).toString();
  var day     = daily.getDate().toString();
  var dayAbbr = dayAbbrs[daily.getDay()];
  if(1 === month.length) month = '0'+month;
  if(1 === day.length  ) day   = '0'+day;
  var filename = year+'-'+month+'-'+day+'-'+dayAbbr+'.md';

  // Figure out which week the day falls within
  var weekIndex = 0;
  weekStarts.forEach(function(pair, index) {
    if(weekIndex !== 0) return;
    var weekStart = new Date(Date.parse(pair[0]));
    if(daily < weekStart) weekIndex = index-1;
  });
  var week = weekStarts[weekIndex][1];

  // path from the root of the project
  return week+'/'+filename;
}
