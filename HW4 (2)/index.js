const data = localStorage.getItem("data") || localStorage.getItem("data") === {} ? 
JSON.parse(localStorage.getItem("data")) :
{
    timeStamp: "",
    turnedOn: true,
};

let switcher = document.querySelector(".switcher");
let body = document.querySelector("body");
let timeText = document.querySelector(".time");

timeText.innerHTML = data.timeStamp;

switcher.addEventListener("click", changeTimeMode)

function changeTimeMode() {
    if (data.turnedOn) {
        data.turnedOn = false;
        data.timeStamp = "Last turn off: " + getDateNow();
    } else {
        data.turnedOn = true;
        data.timeStamp = "Last turn on: " + getDateNow();
    }
    timeText.innerHTML = data.timeStamp;
    switchStyle(data.turnedOn);
    localStorage.setItem("data", JSON.stringify(data));
}

function switchStyle() {
    body.classList.toggle("dark-mode");
    switcher.classList.toggle("dark-mode");
    timeText.classList.toggle("dark-mode");
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
