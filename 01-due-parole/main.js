//  PROBLEM: the user enters two words, the program compares their length and says which one is longer.
/*
EX- l'utente inserisce due parole,
- Il programma confronta la loro lunghezza
- Dice quale delle due è più lunga.
*/

// INPUT

// First word
let firstWord = prompt("Enter the first word");

// Second word
let secondWord = prompt("Enter the second word");

// PROCESSING + OUTPUT

if (firstWord === null || secondWord === null) {
  // (=== verifica se il valore è null)
  console.error("One of the two words does not exist");
} else if (firstWord.length > secondWord.length) {
  console.log(`${firstWord} is longer than ${secondWord}`);
} else if (secondWord.length > firstWord.length) {
  console.log(`${secondWord} is longer than ${firstWord}`);
} else {
  console.log(`${firstWord} and ${secondWord} are the same length`);
}
