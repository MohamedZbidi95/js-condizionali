/*
PROBLEM: the program asks the user for their city,
with "Roma" already written as the default value.
If the user answers, it shows a greeting with the city,
otherwise it shows an alternative message.

PROBLEMA: il programma chiede all'utente la sua città,
con "Roma" già scritto come valore predefinito.
Se l'utente risponde, mostra un saluto con la città,
altrimenti mostra un messaggio alternativo.
*/

//Dispensa: https://boolean-aiwd-1.netlify.app/lezioni/js-condizioni.html (cap. 3)

const city = prompt("What's your city?", "Rome");

if (city === null || city === "") {
  console.log("OH MY GOD! You don't even know where you're from?");
} else if (city === "Rome") {
  console.log("Hey gorgeous, let's go grab some proper carbonara!");
} else {
  console.log(`Wow, ${city} sounds amazing, I'd love to visit it someday!`);
}
