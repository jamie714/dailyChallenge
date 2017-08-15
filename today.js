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



var fulldate = new Date();
var day = fulldate.getDate();
document.getElementById("DATE").innerHTML = "Today is " + mymonth + " " + day + ".";


