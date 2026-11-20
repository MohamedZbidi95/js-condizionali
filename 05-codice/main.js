/*
  PROBLEM: a variable holds the code "1234" as a string.
  The program compares it with the number 1234,
  first with == and then with ===,
  and shows a different message for each comparison.

  PROBLEMA: una variabile contiene il codice "1234" come stringa.
  Il programma lo confronta con il numero 1234,
  prima con == e poi con ===,
  e mostra un messaggio diverso per ogni confronto.

  Dispensa: https://boolean-aiwd-1.netlify.app/lezioni/js-condizioni.html (cap. 6)
*/

const code = "1234";

if (code == 1234) {
  console.log(
    "Con == il codice e il numero sono uguali: guarda solo il valore.",
  );
} else {
  console.log("Con == il codice e il numero sono diversi.");
}

if (code === 1234) {
  console.log(
    "Con === il codice e il numero sono identici: stesso valore e stesso tipo.",
  );
} else {
  console.log(
    "Con === il codice e il numero sono diversi: il valore è uguale, ma il tipo no.",
  );
}
