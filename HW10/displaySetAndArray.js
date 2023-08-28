const setField = document.querySelector(".set");
const arrayField = document.querySelector(".array");

export function displaySetAndArray(array, set) {
    arrayField.textContent = `Типовий Array: [${array}]`;
    setField.textContent = `Типовий Set: [${[...set.values()]}]`;
}