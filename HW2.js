//#1

console.log(durationBetweenDates("31 Jan 2022", "03 Feb 2021", "days"));

function durationBetweenDates(
    startDate = new Date(),
    endDate = new Date(new Date().getDate() + 1), 
    units = "days") {

    startDate = Date.parse(startDate);
    endDate = Date.parse(endDate);

    let duration = endDate - startDate;
    let result;

    switch (units) {
        case "days":
            result = duration/1000/3600/24;
            break;
        case "hours":
            result = duration/1000/3600;
            break;
        case "minutes":
            result = duration/1000/60;
            break;
        case "seconds":
            result = duration/1000;
            break;
    }

    return Math.abs(result) + " " + units;
}

//#2

const priceData = {
    Apples: "23.4",
    BANANAS: "48",
    oRAngGEs: "48.7584", 
};
    
function optimizer(data) {
    return Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key.toLowerCase(), parseFloat(value).toFixed(2)]));
}

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData)

//#3

function recursiveOddSumTo(number) {
    if(number % 2 === 0) {
        number--;
    }
    
    if(number === 1){
        return 1;
    }
    return number + recursiveOddSumTo(number-2);
}

console.log(recursiveOddSumTo(10));

function iterativeOddSumTo(number) {
    let result = 0;

    if(number % 2 === 0) {
        number--;
    }

    while (number >= 1){
        result += number;
        number -= 2;
    }
    return result;
}

console.log(iterativeOddSumTo(10
    ));