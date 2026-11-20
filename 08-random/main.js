/*
PROBLEM: the program generates a random integer from 0 to 100
and shows it. If the number is greater than 90,
it also shows a special message.

PROBLEMA: il programma genera un numero intero casuale da 0 a 100
e lo mostra. Se il numero è maggiore di 90,
mostra anche un messaggio speciale.
*/
//Dispensa: https://boolean-aiwd-1.netlify.app/lezioni/js-condizioni.html (cap. 2)

const numero = Math.floor(Math.random() * 100);

console.log(`Il numero generato è: ${numero}`);

if (numero > 90) {
  console.log("Wow hai superato 90!");
}
