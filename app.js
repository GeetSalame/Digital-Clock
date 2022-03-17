
let DateTime;

//----A function to make single digits into two digits by adding 0 before them, this will keep the clock look uniform
function makeDoubleDigit(num) {
    if (num <= 9) {
        num = '0' + num;
    }
    return num;
}

//This will keep displayed time on the clock updated after every 1 second
setInterval(() => {
    DateTime = new Date();
    //----------day
    let dayIndex = DateTime.getDay();
    const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day.innerHTML = dayArray[dayIndex];
    //-----------month
    let monthIndex = DateTime.getMonth();
    const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    month.innerHTML = monthArray[monthIndex];
    //-----------date
    date.innerHTML = makeDoubleDigit(DateTime.getDate());
    //---------year
    year.innerHTML = DateTime.getFullYear();
    //------------Hour
    let HOUR = DateTime.getHours();
    if (HOUR >= 12) {
        HOUR -= 12;
    }
    hour.innerHTML = makeDoubleDigit(HOUR);
    //---------minutes
    minute.innerHTML = makeDoubleDigit(DateTime.getMinutes());
    //----------seconds
    seconds.innerHTML = makeDoubleDigit(DateTime.getSeconds());
    //----------AM PM-------
    if (DateTime.getHours() >= 12) {
        ampm.innerHTML = "PM"
    } else {
        ampm.innerHTML = "AM"
    }

}, 1000);


//-------blinking
setInterval(() => {
    const colon = document.getElementsByClassName("colon");
    // console.log(colon.length)
    for (i = 0; i < colon.length; i++) {
        if (colon[i].style.visibility == "hidden") {
            colon[i].style.visibility = "visible";
        } else {
            colon[i].style.visibility = "hidden";
        }
    }
}, 500)

function themechange() {
    var element = document.body;
    // element.classList.toggle("white-body");
    if (element.classList.toggle("white-body")) {
        let container = document.getElementsByClassName("container");
        for (i = 0; i < container.length; i++) {
            container[i].style.backgroundImage = "linear-gradient(45deg,   rgb(203, 184, 255), rgb(255, 255, 255))";
        }
        let Btn = document.getElementsByClassName("btn");
        for (i = 0; i < Btn.length; i++) {
            Btn[i].style.color = "black";
        }
    } else {
        let container = document.getElementsByClassName("container");
        for (i = 0; i < container.length; i++) {
            container[i].style.backgroundImage = "linear-gradient(235deg, black, rgb(1, 0, 19))";
        }
        let Btn = document.getElementsByClassName("btn");
        for (i = 0; i < Btn.length; i++) {
            Btn[i].style.color = "white";
        }
    }
}

//-------------- Stopwatch
let StopwatchId;

function Sstart() {
    
    document.getElementById("SstartBtn").style.visibility = "hidden";

    milliSeconds = Number(document.getElementById("Smseconds").textContent);
    Seconds = Number(document.getElementById("Sseconds").textContent);
    Minutes = Number(document.getElementById("Sminute").textContent);
    Hours = Number(document.getElementById("Shour").textContent);
    StopwatchId = (setInterval(() => {
        // console.log("Stopwatch running");
        milliSeconds += 1;
        if (milliSeconds == 100) {
            Seconds += 1;
            milliSeconds = 0;
        }
        if (Seconds == 60) {
            Minutes += 1;
            Seconds = 0;
        }
        if (Minutes == 60) {
            Hours += 1;
            Minutes = 0;
        }
        Smseconds.innerHTML = makeDoubleDigit(milliSeconds);
        Sseconds.innerHTML = makeDoubleDigit(Seconds);
        Sminute.innerHTML = makeDoubleDigit(Minutes);
        Shour.innerHTML = makeDoubleDigit(Hours);
    }, 10))
}

function Sstop() {
    document.getElementById("SstartBtn").style.visibility = "visible";
    clearInterval(StopwatchId);
}

function Sreset() {

    document.getElementById("SstartBtn").style.visibility = "visible";

    clearInterval(StopwatchId);
    Smseconds.innerHTML = "00";
    Sseconds.innerHTML = "00";
    Sminute.innerHTML = "00";
    Shour.innerHTML = "00";
}

//just checking the github verification