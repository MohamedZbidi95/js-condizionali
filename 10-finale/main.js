/*
PROBLEM: the program asks for the name (with a default value) and the age,
generates a random number from 0 to 100, and builds a message:
"no name" if there is no name, otherwise "Hola" + name,
" - adult" or " - minor", and ", lucky number"
if the random number is greater than 90 or the age is greater than 60.

PROBLEMA: il programma chiede il nome (con un valore predefinito) e l'età,
genera un numero casuale da 0 a 100 e costruisce un messaggio:
"no name" se il nome non c'è, altrimenti "Hola" + nome,
" - adult" o " - minor", e ", lucky number"
se il numero casuale è maggiore di 90 o l'età è maggiore di 60.
*/

//Dispensa: https://boolean-aiwd-1.netlify.app/lezioni/js-condizioni.html (esercizio finale)

// INPUT
const userName = prompt("Hola chico, what's your name?", "Guest");
const age = Number(prompt("How old are you?"));
const randomNumber = Math.floor(Math.random() * 101); // * 101 → da 0 a 100 inclusi

// PROCESSING
// let: il messaggio viene costruito a pezzi, quindi cambia
let message = "";

if (!userName || userName.trim() === "") {
  message = "no name";
} else {
  message = `Hola ${userName}`;

  // età: controllata solo se il nome c'è
  if (age >= 18) {
    message = message + " - adult";
  } else {
    message = message + " - minor";
  }

  if (randomNumber > 90 || age > 60) {
    message = message + ", lucky number";
  }

  // Mostra il numero uscito, così l'utente capisce se è fortunato
  message = message + ` (your number: ${randomNumber})`;
}

// OUTPUT
console.log(message);

// ESERCIZIO DA COMANDA(BOOLEAN)

/*
// INPUT
const userName = prompt("Hola chico, what's your name?", "Guest");
const age = Number(prompt("How old are you?"));
const randomNumber = Math.floor(Math.random() * 101); // * 101 → da 0 a 100 inclusi

// PROCESSING
// let: il messaggio viene costruito a pezzi, quindi cambia
let message = "";

if (!userName || userName.trim() === "") {
  message = "no name";
} else {
  message = `Hola ${userName}`;

  // età: controllata solo se il nome c'è
  if (age >= 18) {
    message = message + " - adult";
  } else {
    message = message + " - minor";
  }

  // numero fortunato: stesso livello dell'età, senza else
  if (randomNumber > 90 || age > 60) {
    message = message + ", lucky number";
  }
}

// OUTPUT
console.log(message);
*/
