/**
 * 'Hola Koder'
 * -> 'redok aloh'
 * Imprimir el string invertido
 *
 *
 */

let contador = 0;
let cadena = "Hola Koder";

let len = cadena.length - 1;
do {
  console.log(cadena[len - contador]);
  contador++;
} while (contador <= len);

console.log("******");

/**
 * 'oaoe'
 * Imprimir en consola cada una de las vocales
 *
 */
let count = 0;
let cadena2 = "Hola koder";
let size = cadena2.length - 1;

do {
  if (
    cadena2[count] === "a" ||
    cadena2[count] === "e" ||
    cadena2[count] === "i" ||
    cadena2[count] === "o" ||
    cadena2[count] === "u"
  ) {
    console.log(cadena2[count]);
  }
  count++;
} while (count <= size);
console.log("******");
/**
 * 'HlKdr'
 * Imprimir en consola cada una de las consonantes
 *
 */
count = 0;
cadena2 = "Hola koder";
size = cadena2.length - 1;

do {
  if (
    !(
      cadena2[count] === "a" ||
      cadena2[count] === "e" ||
      cadena2[count] === "i" ||
      cadena2[count] === "o" ||
      cadena2[count] === "u"
    )
  ) {
    console.log(cadena2[count]);
  }
  count++;
} while (count <= size);
