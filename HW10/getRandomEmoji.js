const emojiArray = ["🐮", "🐯", "🐼", "🐨", "🐵", "🐷", "🐸"];

export function getRandomEmoji() {
    return emojiArray[Math.floor(Math.random() * emojiArray.length)];
}