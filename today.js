var FULLDATE = new Date();
var month = FULLDATE.getMonth();
var mymonth = "January";
if (month === 0) {
    mymonth = "January";
} else if (month === 1) {
    mymonth = "February";
} else if (month === 2) {
    mymonth = "March";
} else if (month === 3) {
    mymonth = "April";
} else if (month === 4) {
    mymonth = "May";
} else if (month === 5) {
    mymonth = "June";
} else if (month === 6) {
    mymonth = "July";
} else if (month === 7) {
    mymonth = "August";
} else if (month === 8) {
    mymonth = "September";
} else if (month === 9) {
    mymonth = "October";
} else if (month === 10) {
    mymonth = "November";
} else if (month === 11) {
    mymonth = "December";
}


var dayofweek = new Date();
var day = dayofweek.getDay();
var weekday = "Monday";
if (day === 0) {
    weekday = "Sunday";
} else if (day === 1) {
    weekday = "Monday";
} else if (day === 2) {
    weekday = "Tuesday";
} else if (day === 3) {
    weekday = "Wednesday";
} else if (day === 4) {
    weekday = "Thursday";
} else if (day === 5) {
    weekday = "Friday";
} else if (day === 6) {
    weekday = "Saturday";
}



var fulldate = new Date();
var day = fulldate.getDate();
document.getElementById("DATE").innerHTML = ("Today is " + mymonth + " " + day + ". Happy " + weekday + "!");


