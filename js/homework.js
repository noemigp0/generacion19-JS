//agregar que pueda remover los acentos, y a minusculas

// const isPalindrome = ( str ) => {
//   str
//    let auxSinEspacios = '';
//     for (i = 0; i < str.length; i++) {
//         if (str[i] !== ' '){
//             auxSinEspacios += str[i];
//         }
       
//       }

//     let auxStrReversed = "";
//     for (i = auxSinEspacios.length - 1; i >= 0; i--) {
//       auxStrReversed += auxSinEspacios[i];
//     }
    
//     console.log(auxSinEspacios );
//     console.log(auxStrReversed );
//    return auxSinEspacios === auxStrReversed ? true : false;

// }


// let palabra = prompt('Ingresa una palabra').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// console.log(isPalindrome(palabra) ? 'Es palindromo' : 'No es palindromo');



/**
 * Ejercicio 1 *Obligatorio
 * Realizar una funcion que reciba como parametro 1 array
 * Y devuelva un array con solo los elementos Pares de ese array
 * p.ej.
 * -> evenOnly( [1,2,3,4,18] ) -> [2,4,18]
 * -> evenOnly( [10, 2, 5] ) -> [10,2]
 * -> evenOnly() -> 'Se necesita un array'
 * 
 */

// const evenOnly = (arreglo = []) => {
//   console.log(arreglo.length);
  
//   if ( arreglo.length > 0 ){
  
//   evenOnlyArray = [];
//   for( i = 0; i <= arreglo.length -1; i++ ){
//     if( arreglo[i] % 2 == 0 ){
//       evenOnlyArray.push(arreglo[i]);
//     }  
//   }
//   return evenOnlyArray;
//  } else {
//   return 'Se necesita un array';
//   }  
// }

// //console.log(evenOnly([10, 2, 5]));
// console.log(evenOnly());



/**
 * Ejercicio 2 *Opcional
 * Funcion que reciba como parametro una array de strings
 * y devuelva el primer y ultimo caracter de cada string
 * p.ej.
 * -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
 */


//para este puedo ocupar  slice


//metodo slice puede servir para este ejercicio


//Siempre añade elementos al inicio del array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
 fruits.unshift("Lemon", "Pineapple");
console.log(fruits);
 fruits.unshift("Strawberry", "kiwi");
console.log(fruits);


// //Convierte a cadena separando por comas
// fruits.toString();
// console.log(fruits.toString());


// //

// console.log(fruits.sort());//ordena de forma ascendente
// console.log(fruits.reverse());//ordena de forma descendente


// //array.slice(start, end) //la ultima posicion no es inclusiva
// const citrus = fruits.slice(1, 3);
// console.log(citrus);