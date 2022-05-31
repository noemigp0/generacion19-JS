/**
 * Escribir una funcion que reciba como parametro un correo electronico
 * y que retorne lo siguiente
 * -> maskEmail('jlcc170@gmail.com') -> *******@gmail.com
 *
 * Implementar soluciones con
 * .split()
 */

//incomplete

// let fullEmail = 'jalcc170@gmail.com';

// const maskEmail = ( fullEmail ) => {
//     fullEmail.split('@').map((email, index) => {
//        let aux = '';
//        if( index === 0 ) {
//         email.replaceAll(/[A-Za-z0-9]/gi, '*')
//        }
//        aux
//         return email

//     })

// }

// console.log(maskEmail(fullEmail));

/**
 * Escribir una funcion, Que dado un string, 
 * retorne si el string inicia y termina con una vocal
 * p.ej. 
 * isVowelSandwich("cat") ➞ true
 * isVowelSandwich("ear") ➞ false
 * isVowelSandwich("bake") ➞ false
 * isVowelSandwich("dog") ➞ true

 * Implementar soluciones con
 * .slice()
 * .substring()
 * .charAt()
 * 
 */

let word = "bake"; //false
//let word = 'cat'; //true
//let word = 'ear';
//let word = 'bake';
//let word = 'dog';

//incomplete
// const isVowelSandwich = (wordParam) => {
//   console.log(wordParam.slice(0, 1));
//   console.log(wordParam.slice(-1, wordParam.length));
//   //

//   if (
//     wordParam.slice(0, 1) !== "a" &&
//     "e" &&
//     "i" &&
//     "o" &&
//     "u" &&
//     wordParam.slice(-1, wordParam.length) !== "a" &&
//     "e" &&
//     "i" &&
//     "o" &&
//     "u"
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isVowelSandwich(word));

/**
 * Escribir una funcion, Que dado un string, 
 * retorne si el string solo contiene letras y espacio
 * p.ej. 
 * lettersOnly("JAVAscript") ➞ true
 * lettersOnly("12321313") ➞ false
 * lettersOnly("i have spaces") ➞ true
 * lettersOnly("i have spaces!!!") ➞ false

 * Implementar soluciones con
 * .test()
 * .match()
 * 
 */

let stringToEvaluate = 'JAVAscript';// ➞ true
stringToEvaluate = '12321313'; //➞ false
stringToEvaluate = "i have spaces"; //➞ true
stringToEvaluate = 'i have spaces!!!';//➞ false

//\w	Un carácter alfanumérico (carácter de texto o (“word character”)
//\d	Cualquier carácter de dígito
//\W	Un carácter no alfanumérico
//\S	Un carácter no-espacio-en-blanco
//\s	Cualquier espacio en blanco (espacio, pestaña, nueva línea y similar)

const lettersOnly = (string) => {
  // console.log(string.match(/[\w\s]/gi) );
  // console.log(string.match(/[\W]/gi));
  // console.log(string.replaceAll(' ','').match(/[\W]/gi) );

  if (string.replaceAll(" ", "").match(/[\W\d]/gi)) {
    return false;
  }
  return true;
};

console.log(lettersOnly(stringToEvaluate));

const lettersOnlyTest = (string) => {
  let pattern = /[\W\d]/gi;

  //console.log(pattern.test(string) );

  if (pattern.test(string.replaceAll(' ', ''))) {
    return false;
  }
  return true;
};

console.log(lettersOnlyTest(stringToEvaluate));


/**
 * Escribir una funcion que convierta un string en formato camel case
 * p.ej
 * -> camelize("JavaScript Exercises") -> "JavaScriptExercises"
 * 
 * Implementar soluciones con:
 * .join()
 */

let string = "javaScript exercises something else";
const camelize = ( sentence ) => {
    let auxString = [];
     sentence.split(' ').forEach(element => {       
        auxString.push(element.slice(0,1).toUpperCase() + element.slice(1))
     })
     return auxString.join().replaceAll(',','' );
}

console.log(camelize(string));