/**
 * @author Daren
 * @version 1.0.0
 * @date 2025-12-12
 * @fileoverview This program will ask to name a word and a sentence and then to search for a word inside of the sentence
 */

// Variables
let sentence: string = "";
let word: string = "";
let found: boolean = false;

// Input
sentence = prompt("Please enter a sentence?") || "";
word = prompt("Please enter a word to search for in your sentence?") || "";

// Processing
let lowerSentence: string = sentence.toLowerCase();
let lowerWord: string = word.toLowerCase();

let wordLength: number = lowerWord.length;
let sentenceLength: number = lowerSentence.length;

for (let i = 0; i < sentenceLength; i++) {

  let match: boolean = true;

  for (let j = 0; j < wordLength; j++) {
    if (lowerSentence.charAt(i + j) !== lowerWord.charAt(j)) {
      match = false;
    }
  }

  if (match === true) {
    found = true;
  }
}

// Output
if (found === true) {
  console.log("Hooray, the word " + word + " was found in the sentence: " + sentence);
} else {
  console.log("Sorry, the word " + word + " was not found in the sentence: " + sentence);
}

console.log("Done.");
