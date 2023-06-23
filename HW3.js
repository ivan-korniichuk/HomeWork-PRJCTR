//#1

console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

function addThemAll(...args) {
    return args.reduce((prev, current) => prev + current);
}

//#2

const multiply = (a) => (b) => a *= b;

console.log(multiply(5)(5))		// 25
console.log(multiply(2)(-2))	// -4
console.log(multiply(4)(3))		// 12

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

function byProperty(property, direction) {
    return function (a, b) {
        let firstParametr;
        let secondParametr;

        switch (direction) {
            case ">":
                firstParametr = a;
                secondParametr = b;
                break;
            case "<":
                firstParametr = b;
                secondParametr = a;
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

console.log(movies.sort(byProperty("releaseYear", ">"))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty("runningTimeInMinutes", "<"))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty("movieName", ">"))); // виведе масив фільмів посортованих по назві, в алфавітному порядку

//#4

// detonatorTimer1(3);
// detonatorTimer2(3);

function detonatorTimer1 (delay) {
    console.log(delay--);

    setTimeout(function timer() {
        if(delay <= 0){
            console.log("Boom!");
            return;
        }
        console.log(delay--);
        setTimeout(timer, 1000);
    }, 1000);
}

function detonatorTimer2 (delay) {
    console.log(delay--);
    let timerId = setInterval(() => {
        if (delay <= 0){
            console.log("Boom!!");
            clearInterval(timerId);
        }
        else {
            console.log(delay--);
        }
    }, 1000);
}

//#5

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
    
// player.introduce();
// player.describeMyself();
// player.showMyItems();

//#6

let securedSelfIntroduce = player.introduce.bind(player);// якийсь код
let securedSelfdescribeMyself = player.describeMyself.bind(player);// якийсь код
let securedSelfshowMyItems = player.showMyItems.bind(player);// якийсь код

player = {};

// setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат
// setTimeout(securedSelfdescribeMyself, 2000); // виведе коректний результат
// setTimeout(securedSelfshowMyItems, 3000); // виведе коректний результат

//#7

function someFunction (a, b) { // тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль
    console.log(a > b);
}

function slower (func, seconds) {
    function wrapper(...args) {
        console.log("Chill out, you will get you result in 5 seconds");

        setTimeout(() => {func.apply(this, args);}, seconds*1000);
    }

    return wrapper
}

let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор*

//slowedSomeFunction(3,2) // викликаєте декоратор

// виведе в консоль "Chill out, you will get you result in 5 seconds"
//...через 5 секунд виведе результат роботи 'someFunction*'