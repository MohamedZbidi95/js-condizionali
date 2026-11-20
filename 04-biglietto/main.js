/*
PROBLEM: the program uses a boolean variable for the ticket
and a number variable for the age.
It shows "Welcome" only if the user has a ticket and is an adult,
otherwise it explains what is missing.

PROBLEMA: il programma usa una variabile boolean per il biglietto
e una variabile number per l'età.
Mostra "Benvenuto" solo se l'utente ha il biglietto ed è maggiorenne,
altrimenti spiega cosa manca.

  Dispensa: https://boolean-aiwd-1.netlify.app/lezioni/js-condizioni.html (cap. 5)
*/

const ticket = true;
const age = 18;

if (ticket) {
  console.log("Welcome, sir! Could you kindly show me some ID?");

  if (age >= 18) {
    console.log("Welcome aboard! You may take your seat in business class!");
  } else {
    console.log(
      "Nice ticket, but your ID says you have a curfew. Come back when you can grow a beard!",
    );
  }
} else {
  console.log("No ticket? Get out!");
}
