const switcher = document.querySelector(".switcher");
const body = document.querySelector("body");
const timeText = document.querySelector(".time");

let timeStamp = localStorage.getItem("timeStamp") ||  "";
let turnedOn;

if (localStorage.getItem("turnedOn") === "false"){
    turnedOn = false;
} else {
    turnedOn = true;
}

timeText.textContent = timeStamp;

if(turnedOn) {
    switcher.textContent = "Turn off";
} else {
    body.classList.add("dark-mode");
    switcher.textContent = "Turn on";
}

switcher.addEventListener("click", changeTimeMode)

function changeTimeMode() {
    if (turnedOn) {
        turnedOn = false;
        timeStamp = "Last turn off: " + getDateNow();
        switcher.textContent = "Turn on";
    } else {
        turnedOn = true;
        timeStamp = "Last turn on: " + getDateNow();
        switcher.textContent = "Turn off";
    }
    timeText.textContent = timeStamp;
    
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
