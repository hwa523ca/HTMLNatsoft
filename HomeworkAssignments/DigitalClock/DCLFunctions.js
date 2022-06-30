function Time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var monthRN = date.getMonth();
    var dayRN = date.getDate();
    var yearRN = date.getFullYear();
    var period = "";
    if (hour >= 12) {
        period = "PM";
    } 
    else {
        period = "AM";
    }
    if (hour == 0) {
        hour = 12;
    } 
    else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }

    hour = update(hour);
    minute = update(minute);
    second = update(second);
    document.getElementById("Digital-Clock").innerText = hour + ":" + minute + ":" + second + " " + period;
    document.getElementById("DateOfDay").innerText = (monthRN + 1) + "/" + dayRN + "/" + yearRN;
    setTimeout(Time, 1000);
}

function update(t) {
    if (t < 10) {
    return "0" + t;
    }
    else {
    return t;
    }
}
   
Time();