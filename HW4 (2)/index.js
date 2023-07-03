const data = localStorage.getItem("data") || localStorage.getItem("data") === {} ? 
JSON.parse(localStorage.getItem("data")) :
{
    timeStamp: "",
    turnedOn: true,
};

let switcher = document.querySelector(".switcher");
let body = document.querySelector("body");
let timeText = document.querySelector(".time");

setTime(data.turnedOn);
switcher.addEventListener("click", changeTime)

function changeTime() {
    if (data.turnedOn) {
        data.turnedOn = false;
        data.timeStamp = "Last turn off: " + getDateNow();
    } else {
        data.turnedOn = true;
        data.timeStamp = "Last turn on: " + getDateNow();
    }
    setTime(data.turnedOn);
    localStorage.setItem("data", JSON.stringify(data));
}

function setTime(turnedOn) {
    if (turnedOn) {
        body.style.backgroundColor = "white";
        switcher.style.backgroundColor = "black";
        switcher.style.color = "white";
        switcher.innerHTML = "Turn off";

        timeText.innerHTML = data.timeStamp;
        timeText.style.color = "black";
    } else {
        body.style.backgroundColor = "black";
        switcher.style.backgroundColor = "white";
        switcher.style.color = "black";
        switcher.innerHTML = "Turn on";

        timeText.innerHTML = data.timeStamp;
        timeText.style.color = "white";
    }
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
