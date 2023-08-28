// #1

function fizzBuzzIterator() {
    let nextIndex = 1;

    return {
        next: function () {
            if (nextIndex <= 100) {
                //const result = {value: nextIndex, done: false};
                let result;
                
                if (nextIndex % 15 === 0) {
                    result = {value: "FizzBuzz", done: false};
                } else if (nextIndex % 5 === 0) {
                    result = {value: "Buzz", done: false};
                } else if (nextIndex % 3 === 0) {
                    result = {value: "Fizz", done: false};
                } else {
                    result = {value: nextIndex, done: false};
                }

                nextIndex++
                return result;
            } else {
                return {done: true};
            }
        }
    };
}

function* fizzBuzzGenerator() {
    let nextIndex = 1;

    while(nextIndex <= 100) {
        if (nextIndex % 15 === 0) {
            yield "FizzBuzz";
        } else if (nextIndex % 5 === 0) {
            yield "Buzz";
        } else if (nextIndex % 3 === 0) {
            yield "Fizz";
        } else {
            yield nextIndex;
        }
        nextIndex++;
    }

    return;
}

const iterator = fizzBuzzIterator();
const generator = fizzBuzzGenerator();


// #2

function* generateRandomNumbers(max, quantity) {
    while(quantity > 0) {
        quantity--;

        yield Math.floor(Math.random() * max);
    }
    return;
}

const random = generateRandomNumbers(6, 4);

for(let number of random){
    console.log(number);
}