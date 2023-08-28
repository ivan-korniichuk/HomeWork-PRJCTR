"use strict";

import { getRandomEmojiArray } from "./getRandomEmojiArray.js";
import { displaySetAndArray } from "./displaySetAndArray.js";

let array = getRandomEmojiArray();
let set = new Set(array);

const input = document.querySelector(".item-input");
const form = document.querySelector(".add-item-form");

form.addEventListener("submit", event => addItem(event));

displaySetAndArray(array, set);

function addItem(event) {
    event.preventDefault();
    const inputValue = input.value.trim();
    if(inputValue.length > 0) {
        array.push(inputValue);
        set.add(inputValue);

        displaySetAndArray(array, set);
    }
}