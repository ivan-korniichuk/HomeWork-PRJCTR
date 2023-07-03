//#1

let headerTwo = document.getElementById("headerTwo");
console.log(headerTwo);

let section = document.querySelector("section");
console.log(section);

let li;

for (const element of document.querySelectorAll("ul > li")) {
    if (element.innerHTML === "Пункт 5") {
        li = element;
        break;
    }
}
console.log(li);

let spanWithClass = document.getElementsByClassName("hatredLevelCounter");
console.log(section);