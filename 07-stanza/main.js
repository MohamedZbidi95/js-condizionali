/*
PROBLEM: two boolean variables say if the light is on
and if there are people in the room.
The program shows "occupied" if both are true,
"free" if both are false, and "half-empty" in the other cases.

PROBLEMA: due variabili boolean dicono se la luce è accesa
e se ci sono persone nella stanza.
Il programma mostra "occupata" se sono vere tutte e due,
"libera" se sono false tutte e due, e "semi-vuota" negli altri casi.
*/
//Dispensa: https://boolean-aiwd-1.netlify.app/lezioni/js-condizioni.html (cap. 8)

const luce = true;
const stanzaPiena = true;

if (luce === true && stanzaPiena === true) {
  console.log("Occupato");
} else if (!luce && stanzaPiena === false) {
  console.log("Libero!");
} else if (!luce && stanzaPiena === true) {
  console.log("Forse Libero! Ma devi accendere la luce!");
} else {
  console.log("Stanza Libera! Mamma spegni la luce! Grazie.");
}
