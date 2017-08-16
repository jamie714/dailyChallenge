var months = ["January", 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthNum = 0;
function changeMonthsForward(){
    monthNum += 1;
    if (monthNum == 12){
        monthNum = 0;
    }
    changeMonth();
    return monthNum;
}

function changeMonth(){
    var displayMonth = months[monthNum];
    var display = document.getElementById("monthChange");
    display.innerHTML = displayMonth;
    console.log("in change month function");
}

function changeMonthsBackward(){
    monthNum -= 1;
    if (monthNum == -1){
        monthNum = 11;
    }
    changeMonth();
    return monthNum;
}


function correctDays(){
    console.log('corresponds to function');
    if (monthNum == 3 || monthNum == 5 || monthNum == 8 || monthNum == 10){
        var noDay = document.getElementById("day31");
        noDay.innerHTML = '';
        console.log('correctDays is working');
        console.log(monthNum);
    }
    else if(monthNum == 1){
        var noDay = document.getElementById("day31");
        noDay.innerHTML = '';
        var noDay2 = document.getElementById("day30");
        noDay2.innerHTML = '';
        console.log('correctDays is working 222');
        console.log(monthNum);
    }
    else{
        var day = document.getElementById("day31");
        day.innerHTML = '31';
        var day2 = document.getElementById('day30');
        day2.innerHTML = '30'
    }
}

/*window.onload = function(){correctDays()};*/
