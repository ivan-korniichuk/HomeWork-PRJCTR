//#1

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = userNames.map((userName) => {
    userName = userName.split(' ').map((name) => {
        return name.split('', 1);
    });
    return userName.join('.');
});
initials.sort();

console.log(initials);

//#2

const currentMaxValue = 4589;
let reverseMaxValue;

reverseMaxValue = Number(currentMaxValue.toString().split('').reverse().join(''));

console.log(reverseMaxValue);
console.log(typeof reverseMaxValue);

//#3

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

let flatResultsArray = resultsArray.flat(Infinity);
const init = 1;

productOfArray = flatResultsArray.reduce((prev, current) => {return prev * current}, init);

console.log(productOfArray);