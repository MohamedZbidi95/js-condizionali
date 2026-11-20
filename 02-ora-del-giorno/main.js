/*
PROBLEM: given a variable "ora" with an hour from 0 to 23,
the program shows a greeting based on the time of day:
before 12 "Good morning", before 18 "Good afternoon",
otherwise "Good evening".

PROBLEMA: data una variabile "ora" con un'ora da 0 a 23,
il programma mostra un saluto in base al momento della giornata:
prima delle 12 "Good morning", prima delle 18 "Good afternoon",
negli altri casi "Good evening".
*/
//Dispensa: https://boolean-aiwd-1.netlify.app/lezioni/js-condizioni.html (cap. 1)

const ora = 21;

if (ora > 23 || ora < 0) {
  console.log("Can you read a clock?");
} else if (ora < 12) {
  console.log("Good morning");
} else if (ora < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}
