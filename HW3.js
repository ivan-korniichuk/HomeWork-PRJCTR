//#1

console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

function addThemAll(...args) {
    let sum = 0;

    for (let arg of args) {
        sum += arg;
    }

    return sum;
}

//#2

console.log(multiply(5)(5))		// 25
console.log(multiply(2)(-2))	// -4
console.log(multiply(4)(3))		// 12

function multiply(a) {
    let product = a;

    return function (b) {
        return product *= b;
    }
}

//#3

const movies = [
{
    movieName: 'The Thing',
    releaseYear: 1982,
    directedBy: 'Carpenter',
    runningTimeInMinutes: 109,
},
{
    movieName: 'Aliens',
    releaseYear: 1986,
    directedBy: 'Cameron',
    runningTimeInMinutes: 137,
},
{
    movieName: 'Men in Black',
    releaseYear: 1997,
    directedBy: 'Sonnenfeld',
    runningTimeInMinutes: 98,
},
{
    movieName: 'Predator',
    releaseYear: 1987,
    directedBy: 'McTiernan',
    runningTimeInMinutes: 107,
},
];

console.log(movies.sort(byProperty("releaseYear", "<"))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty("runningTimeInMinutes", "<"))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty("movieName", ">"))); // виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
    return function (a, b) {
        let firstParametr;
        let secondParametr;

        switch (direction) {
            case ">":
                firstParametr = b;
                secondParametr = a;
                break;
            case "<":
                firstParametr = a;
                secondParametr = b;
                break;
        }
        switch (property) {
            case "releaseYear":
                return firstParametr.releaseYear - secondParametr.releaseYear;
            case "runningTimeInMinutes":
                return firstParametr.runningTimeInMinutes - secondParametr.runningTimeInMinutes;
            case "movieName":
                return firstParametr.movieName - secondParametr.movieName;
        }
    }
}

//#4

detonatorTimer1(3);
detonatorTimer2(3);

function detonatorTimer1 (delay) {
    if(delay <= 0){
        console.log("Boom!");
        return;
    }

    console.log(delay--);

    setTimeout(detonatorTimer1, 1000, delay);
}

function detonatorTimer2 (delay) {
    console.log(delay--);
    let timerId = setInterval(timer, 1000);

    function timer () {
        if (delay <= 0){
            console.log("Boom!!");
            clearInterval(timerId);
        }
        else {
            console.log(delay--);
        }
    }
}

let player = {
    name: "Ivan",
    kingdom: "Sonorous",
    gender: "male",
    profession: "knight",
    age: 25,
    beauty: "handsome",
    storage: [
        {
            name: "gold",
            amount: "15g"
        }, {
            name: "sword",
            amount: "1"
        }, {
            name: "apple",
            amount: "5"
        }],
    introduce() {
        console.log(`Hi! My name is ${this.name} and I'm a ${this.profession} in the kingdom of ${this.kingdom}.`);
    },
    describeMyself() {
        console.log(`I'm a ${this.beauty} ${this.age < 30 ? "young": "old"} looking ${this.gender === "male"? "man": this.gender === "female"? "woman": "person"}.`);
    },
    showMyItems() {
        console.log(`I have:${this.storage.map(item => ` ${item.amount} ${item.name}`)}.`);
    }
}
    
player.introduce();
player.describeMyself();
player.showMyItems();
