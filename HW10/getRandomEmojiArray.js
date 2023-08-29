import { getRandomEmoji } from "./getRandomEmoji.js";

export function getRandomEmojiArray() {
    let array = []

    for (let i = 0; i < (5 + Math.floor(Math.random() * 5)); i++) {
        array.push(getRandomEmoji());      
    }

    return array;
}