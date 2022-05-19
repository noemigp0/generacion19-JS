console.log('is largest');


//Estar en rama de la clase
//Crear el archivo is_largest.js
//Pedir al ususario 3 numeros
//Imprimir en consola el mayor

let numero1 = prompt('Ingrese numero 1');
let numero2 = prompt('Ingrese numero 2');
let numero3 = prompt('Ingrese numero 3');

console.log(numero1, numero2, numero3);

if( parseInt(numero1) > parseInt(numero2) && parseInt(numero1) > parseInt(numero3)) {

    console.log(`El numero mayor es ${numero1}`);

} else if( parseInt(numero3) > parseInt(numero1) && parseInt(numero3) > parseInt(numero2) ) {

    console.log(`El numero mayor es ${numero3}`);

} else {
    console.log(`El numero mayor es ${numero2}`);
}