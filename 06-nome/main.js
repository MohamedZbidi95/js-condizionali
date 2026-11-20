/*
PROBLEM: the program asks the user for their name.
If the user wrote something, it shows a greeting,
otherwise it shows an error message.

PROBLEMA: il programma chiede all'utente il suo nome.
Se l'utente ha scritto qualcosa, mostra un saluto,
altrimenti mostra un messaggio di errore.
*/
//Dispensa: https://boolean-aiwd-1.netlify.app/lezioni/js-condizioni.html (cap. 7)

const name = prompt("What is your name?");

if (!name || name.trim() === "") {
  console.error("Don't you know your own name?");
} else {
  console.log(`Hi ${name}, nice to meet you.`);
}
