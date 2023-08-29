"use strict";

import { getRandomEmojiArray } from "./getRandomEmojiArray.js";
import { displaySetAndArray } from "./displaySetAndArray.js";
import { getRandomEmoji } from "./getRandomEmoji.js";

let array = getRandomEmojiArray();
let set = new Set(array);

const input = document.querySelector(".item-input");
const form = document.querySelector(".add-item-form");

form.addEventListener("submit", event => addItem(event));
window.onload = onLoad;

function addItem(event) {
    event.preventDefault();
    const inputValue = input.value.trim();
    if(inputValue.length > 0) {
        array.push(inputValue);
        set.add(inputValue);

        displaySetAndArray(array, set);
        addRandomEmojiToInput();
    }
}

function addRandomEmojiToInput() {
    input.value = getRandomEmoji();
}

function onLoad() {
    displaySetAndArray(array, set);
    addRandomEmojiToInput();
}