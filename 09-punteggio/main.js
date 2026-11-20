/*
PROBLEM: the program asks the user for a score with prompt,
converts it into a number with Number(),
and shows "Passed" if the score is at least 60,
otherwise "Not passed".

PROBLEMA: il programma chiede all'utente un punteggio con prompt,
lo converte in numero con Number(),
e mostra "Superato" se il punteggio è almeno 60,
altrimenti "Non superato".
*/
//Dispensa: https://boolean-aiwd-1.netlify.app/lezioni/js-condizioni.html (cap. 4)

const number = Number(prompt("Enter a score"));

if (number >= 60) {
  console.log("Passed");
} else {
  console.log("Failed");
}
