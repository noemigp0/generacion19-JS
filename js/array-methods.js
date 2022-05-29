/**
 * Escribir una funcion que reciba como parametro un correo electronico
 * y que retorne lo siguiente
 * -> maskEmail('jlcc170@gmail.com') -> *******@gmail.com
 *
 * Implementar soluciones con
 * .split()
 */

let fullEmail = 'jalcc170@gmail.com';

const maskEmail = ( fullEmail ) => {
    fullEmail.split('@').map((email, index) => {
       let aux = '';
       if( index === 0 ) {
        email.replaceAll(/[A-Za-z0-9]/gi, '*') 
       } 
       aux
        return email

    })

    
}

console.log(maskEmail(fullEmail));

//    return email.split('@').forEach((element, index) => {
       
//         if ( index === 0 ) {
//             console.log(element.replaceAll(/[A-Za-z0-9]/gi, '*'))
//             }
//            //console.log( element.match(/[A-Za-z0-9]/gi).ma)
//         }
//         // console.log(element, index)
// )
//     }




//replaceAll('','*');

console.log(maskEmail(fullEmail));





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

/**
 * Escribir una funcion que convierta un string en formato camel case
 * p.ej
 * -> camelize("JavaScript Exercises") -> "JavaScriptExercises"
 * 
 * Implementar soluciones con:
 * .join()
 */

/**
 * Escribir una funcion que convierta de formato camel case a formato normal
 * p.ej
 * -> uncamelize("helloWorld") -> "hello world"
 * 
 * Implementar soluciones con:
 * .forEach()
 */


/**
 * Escribir una funcion que replique un string N veces
 * p.ej
 * -> repeat('Ha!') -> "Ha!"
 * -> repeat('Ha!', 2) -> "Ha!Ha!"
 * -> repeat('Ha!', 3) -> "Ha!Ha!Ha!"
 *
 * Implementar soluciones con:
 * .repeat()
 * .forEach()
 */


/**
 * Escribir una funcion que cuente las veces que aparece 
 * una palabra en una oración
 * p.ej
 * -> countWord('Hola mundo', 'mundo') -> 1
 * -> countWord('The quick brown fox jumps over the lazy dog', 'the') -> 2
 *
 * Implementar soluciones con:
 * .repeat()
 * .forEach()
 */


/**
 * Generar una funcion 
 * que a partir de un string devuelva solo las iniciales de ese string
 * getInitialLetters('Hola koders')
 * -> 'Hk'
 * 
 * Implementar soluciones con:
 * .forEach()
 * .map()
 * .reduce()
 * for()
 * 
 */


/**
 * Escribir una funcion, Que dado una oracion, 
 * convierta cada 2 palabras en mayusculas o minusculass
 * p.ej
 * swapCase('hola mundo, hola koders')
 * -> 'hola MUNDO, hola KODERS'
 * 
 * Implementar soluciones con:
 * .map()
 * .reduc()
 * .forEach()
 * for()
 */



/**
 * Escribir una funcion, Que dado una array de numeros, 
 * Encuentre el numero mas pequeño
 * getSmallNumber( [1,5, 7] )
 * -> 1
 * 
 * Implementar soluciones con
 * for()
 * .forEach()
 * .reduce()
 */



/**
 * Escribir una funcion, Que dado una array de  10 numeros entre 0 y 9, 
 * retorne un string en formato telefonico
 * formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
 * -> "(123) 456-7890"
 * 
 * Implementar soluciones con
 * for()
 * .forEach()
 * .reduce()
 */



/**
 * Escribir una funcion, Que dado una array de numeros y strings, 
 * retorne un array con solo los que son de tipo string
 * filterArray([1, 2, "a", "b"]) 
 * -> ["a", "b"]
 * 
 * Implementar soluciones con
 * for()
 * .forEach()
 * .filter()
 * .reduce()
 */