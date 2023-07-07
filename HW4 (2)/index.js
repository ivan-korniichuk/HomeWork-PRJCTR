let timeStamp = localStorage.getItem("timeStamp") ||  "";
let turnedOn;

if (localStorage.getItem("turnedOn") === "false"){
    turnedOn = false;
} else {
    turnedOn = true;
}

const switcher = document.querySelector(".switcher");
const body = document.querySelector("body");
const timeText = document.querySelector(".time");

timeText.innerHTML = timeStamp;

if(turnedOn === true) {
    switcher.innerHTML = "Turn off";
} else {
    body.classList.add("dark-mode");
    switcher.innerHTML = "Turn on";
}

switcher.addEventListener("click", changeTimeMode)

function changeTimeMode() {
    if (turnedOn) {
        turnedOn = false;
        timeStamp = "Last turn off: " + getDateNow();
        switcher.innerHTML = "Turn on";
    } else {
        turnedOn = true;
        timeStamp = "Last turn on: " + getDateNow();
        switcher.innerHTML = "Turn off";
    }
    timeText.innerHTML = timeStamp;
    
    body.classList.toggle("dark-mode");

    localStorage.setItem("turnedOn", turnedOn);
    localStorage.setItem("timeStamp", timeStamp);
}

function getDateNow() {
    const date = new Date();

    return String(date.getDate()).padStart(2, '0') + "-" +
    String(date.getMonth() + 1).padStart(2, '0') + "-" +
    date.getFullYear() + " " +
    String(date.getHours() + 1).padStart(2, '0') + ":" +
    String(date.getMinutes() + 1).padStart(2, '0') + ":" +
    String(date.getSeconds() + 1).padStart(2, '0');
}
