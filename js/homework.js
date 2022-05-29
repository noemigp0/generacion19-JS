/**
 * Tarea
 * REalizar los siguientes 3 ejercicios
 *
 */

/**
 * 1. funcion con .reduce()
 * capitalizeNames( ['jorge','lUis', 'marcOs', 'mario'] )
 * -> ['Jorge','Luis', 'Marcos', 'Mario']
 */

let names = ["jorge", "lUis", "marcOs", "mario", "nOeMi"];

const capitalizeNames = (namesArray) =>
  namesArray.reduce((acc, name) => {
    acc.push(
      name.charAt(0).toUpperCase() + name.substring(1).toLocaleLowerCase()
    );
    return acc;
  }, []);

console.log(capitalizeNames(names));
/**
 * 2. funcion con .reduce()
 * Dado un array de numeros, filtras solo los pares
 * filterEvens( [2,3,4,5] )
 * -> [2,4]
 */

let numbers = [2, 3, 4, 5, 6, 8];
//si pongo las llaves en la funsion, espera un return, si no se las pongo retorna automatico
let filterEvens = (numbersArray) =>
  numbersArray.reduce((acc, number) => {
    if (number % 2 === 0) {
      acc.push(number);
    }
    return acc;
  }, []);

console.log(filterEvens(numbers));

/**
 * 3. funcion con .reduce()
 * Dado un array de numeros, obtener la suma de solo los elementos positivos
 * addAllPositives( [ 1, -4, 12, 0, -3, 29, -150] )
 * -> 42
 */

let fullNumbers = [1, -4, 12, 0, -3, 29, -150, -40, 40];
let addAllPositives = (fullNumbersArray) =>
  fullNumbersArray.reduce((acc, number) => {
    if (number > 0) {
      acc += number;
    }
    return acc;
  }, 0);

console.log(addAllPositives(fullNumbers));

/**
 * 4. Estudiar Objetos y métodos de objetos
 *
 */

/**
 * Opcional
 * funcion con .reduce()
 * Dado un array de palabras, filtras las que son palindromos
 * onlyPalindrome( ['oso','pedro', 'jorge', 'seres'] )
 * -> ['oso','seres']
 */

let words = ['oso', 'pedro', 'jorge', 'seres', 'ala'];
let onlyPalindrome = (wordsArray) =>
  wordsArray.reduce((acc, word) => {
    let auxReverseWord = word.split("").reverse().join().replaceAll(",", "");
    if (word === auxReverseWord) {
      acc.push(word);
    }

    return acc;
  }, []);

console.log(onlyPalindrome(words));
