console.log('is largest');


//Estar en rama de la clase
//Crear el archivo is_largest.js
//Pedir al ususario 3 numeros
//Imprimir en consola el mayor

let numero1 = parseInt(prompt('Ingrese numero 1'));
let numero2 = parseInt(prompt('Ingrese numero 2'));
let numero3 = parseInt(prompt('Ingrese numero 3'));

console.log(numero1, numero2, numero3);

if( numero1 > numero2 && numero1 > numero3) {

    console.log(`El numero mayor es ${numero1}`);

} else if( numero3 > numero1 && numero3 > numero2 ) {

    console.log(`El numero mayor es ${numero3}`);   

}else if ( numero1 === numero2 && numero3 === numero2){
    console.log(`Los numeros son iguales`);  
}

else {
    console.log(`El numero mayor es ${numero2}`);
}