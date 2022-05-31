//Arrow functions
//parametros
//invocacion de funciones

// const suma = ( a, b ) => {
//     let total = a + b;
//     return total
// }

// /**

// //invocar
// //suma() -> sin argumentos
// //suma(2,3) -> con argumentos

// // Array.map( function(cv, index, arr) {})
// // arr.map( () => {})

// //Repaso metodos de array

// // [1,2,3].map( (cv, index, arr) = {

// // })

// const doubleNumber = ( numberToIncrement) => {
//     let total = numberToIncrement * 2
//     return total
// }

// console.log( doubleNumber( 1000 ) )

// let multiArray = [ 100, 1000,10,2,4 ]

// console.log(multiArray.map( doubleNumber ))
// // multiArray.map(
// //     ( cv, index, arr) => {
// //         let total = cv * 2
// //         return total
// //     }
// // )

// console.log(['s', 't', 'r'].filter( (cv, index, arr) => {

//     return cv === 'r'
// }))

// console.log(['s', 't', 'r'].filter( (cv, index, arr) => {
//     if( cv === 'r') {
//         return cv
//     }

// }))

// let numbers = [2, 3, 4, 5, 6, 8];
// //si pongo las llaves en la funsion, espera un return, si no se las pongo retorna automatico
// let filterEvens = (numbersArray) =>
//   numbersArray.reduce((acc, number) => {
//     if (number % 2 === 0) {
//       acc.push(number);
//     }
//     return acc;
//   }, []);

// console.log(filterEvens(numbers));
/**
 * Escribir una funcion, Que dado una array de numeros y strings, 
 * retorne un array con solo los que son de tipo string
 * filterArray([1, 2, "a", "b"]) 
 * -> ["a", "b"]
 * 
 * Implementar soluciones con
 * .forEach()
 * .filter()
 * .reduce()
 *
*/








let array = [1, 2, "a", "b"];
//forach no retornar nada
//auxiliares meterlos dentro de la funsion
//
const filterArray = (arrayParameter) => {
let auxArray = [];
  arrayParameter.forEach((cv) => {
    if (typeof(cv) === "string") {
      auxArray.push(cv);     
    }    
  });
  return auxArray;
}
console.log(filterArray(array));


const filterArrayF = (arrayParameter) => {
    
     let filtrados = arrayParameter.filter((cv) => 
        typeof(cv) === "string"   
            
      );
      return filtrados;
    }
    console.log(filterArrayF(array));




//si pongo las llaves en la funsion, espera un return, si no se las pongo retorna automatico
// let reduceStrings = (numbersArray) =>
//   numbersArray.reduce((acc, number) => {
//     if (number % 2 === 0) {
//       acc.push(number);
//     }
//     return acc;
//   }, []);

// console.log(filterEvens(numbers));


const reduceStrings = (array) => 
    array.reduce( (acc, cv, index, array) => {
       
        if (typeof(cv) === "string"){
            acc.push(cv);
        }       
      return acc;

    }, []) 
console.log(reduceStrings(array));





