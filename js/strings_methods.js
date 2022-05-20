//Metodos string
//funsiones
//str.nombreMetodo(p1,p2,pN);
//toUpperCase()
//.toLowerCase()
//.substring(start, end)
//.includes()



//Ejemplo uno.
//

// let palabra = prompt('Ingresa una palabra y te dire cuantas vocales tiene');

// if (palabra === null) {
//     console.log('Debes ingresar un palabra');
// } else {
//     let numeroVocales = palabra.match(/[aeiou]/g).length + " vocales";
//     alert(`La palabra ${palabra} tiene ${numeroVocales} vocales`);
  
// }


//Ejercicios
//str.method()
//str.method(p1, ...)

//'Hola Koders'
//Cuantas vocales existen

let str = 'Hola Koders';
 console.log(`str tiene ${str.match(/[aeiou]/g).length} vocales`);


//'Hola Koders'
//Cuantas caracteres son
console.log(`str tiene ${str.length} caracteres`);

//'Hola Koders'
//Cortar cadena en 2 partes  "Hola" "Koders"
console.log(`${str.split(' ')}`);


/**
 * 'Hola Koders'
 * Reemplazar todas las Vocales por *
 * -> "h*l* k*d*rs"
*/
//replace('lo que quiero reemplazar', 'patron')
console.log(` ${str.replaceAll(/[aeiou]/gi, '*')} `);
    
    

