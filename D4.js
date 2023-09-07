/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
   return l1 * l2;
};
console.log("area: ", area(2, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (num1, num2) {
   return num1 === num2 ? (num1 + num2) * 3 : num1 + num2;
};

console.log("crazySum: ", crazySum(2, 2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (num) {
   let num2 = 19;
   let diff = Math.abs(num - num2);

   if (diff > num2) {
      diff *= 3;
   }

   return diff;
};

console.log("crazyDiff: ", crazyDiff(39));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundry = function (n) {
   if ((20 <= n && n <= 100) || n === 400) {
      return true;
   } else {
      return false;
   }
};

console.log("boundry: ", boundry(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (str) {
   let epicode = "EPICODE";
   let firstWord = str.slice(0, 7).toUpperCase();

   if (firstWord === epicode) {
      return epicode + str.substring(7);
   }
   return epicode + " " + str;
};

console.log("epify: ", epify("epicod holasaee"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (num) {
   if ((num > 0 && num % 3 === 0) || num % 7 === 0) {
      return true;
   } else {
      return false;
   }
};

console.log("check3and7: ", check3and7(-1));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (str) {
   let reverse = "";
   for (let i = str.length - 1; i !== -1; i--) {
      reverse += str.slice(i, i + 1);
   }
   return reverse;
};

console.log("reverseString: ", reverseString("EDOCIPE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (str) {
   let strArr = str.trim().split(" ");
   let string = "";

   for (let i = 0; i < strArr.length; i++) {
      string +=
         strArr[i].slice(0, 1).toUpperCase() + strArr[i].substring(1) + " ";
   }

   return string;
};

console.log("upperFirst: ", upperFirst(" jskh jhsoeu hsankn uawh nskah w   "));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutSring = function (str) {
   const input = str;

   //  getting the lenth of the string and substracting 2 to get the value to substitute into substr so I can remove the last letter of the string
   let lastInt = input.trim("").length - 2;
   let output = str.substr(1, lastInt);

   return output;
};

console.log("cutString: ", cutSring("abcdaedfgnxx"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
   let array = [];
   for (let i = 0; i < n; i++) {
      const rando = Math.ceil(Math.random() * 10);
      array.push(rando);
   }

   return array;
};

const arrayGiveMeRandom = giveMeRandom(3);
console.log("giveMeRandom: ", arrayGiveMeRandom);

export { arrayGiveMeRandom };
