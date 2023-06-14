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

console.log(optimizer(priceData));
    
function optimizer(data) {
    return Object.fromEntries(Object.entries(data).reverse());
}