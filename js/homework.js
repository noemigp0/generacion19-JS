/**
 * Funcion que reciba una palabra
 * Retorne la palabra invertida
 *
 * reverseStr('hola mundo')
 * -> 'odnum aloh'
 *
 * Usar solo metodos de str y array
 */

let beforeReverse = "hola mundo";

const reverseStr = (word) => {
  return word.split("").reverse().toString().replaceAll(",", "");
};

console.log(reverseStr(beforeReverse));

/**
 * Funcion que reciba un array de numeros
 * y devuelva el promedio de todos los elementos
 *
 * getAverage( [10, 8, 9, 7] )
 * -> 8.5
 */

const getAverage = (numbersArray = []) => {
  let auxAverage = 0;
  numbersArray.forEach((element) => {
    auxAverage += element;
  });

  return auxAverage / numbersArray.length;
};

console.log(getAverage([10, 8, 9, 7]));

/**
 * Funcion que reciba un array de strings
 * y devuelva un array indicando si son palindromos o no
 *
 * arePalindrome( ['oso','juan', 'seres'] )
 * -> [true, false, true]
 */

let isPalindrome = (wordsArray = []) => {
  let auxArrayReverse = [];
  wordsArray.forEach((element, index) => {
    if (
      element.split("").reverse().toString().replaceAll(",", "") === element
    ) {
      auxArrayReverse.push(true);
    } else {
      auxArrayReverse.push(false);
    }
  });

  return auxArrayReverse;
};

console.log(isPalindrome(["oso", "juan", "seres"]));

/**
 * Estudiar los métodos de array
 * .filter()
 * .reduce()
 */


