/**
 * Ejercicio 2
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 3
 * 3 x 1 = 3
 * 3 x 2 = 6
 * ....
 * 3 x 10 = 30
 */
 let entrada = '' ;
 entrada = parseInt(prompt('Ingresa el numero de la tabla que deseas utilizar'));

if( entrada !== null && entrada >= 1 && entrada <= 10){ //poner validacion entre 1 y 10

    console.log(entrada);
    console.log(typeof(entrada));

    for( i = 1; i<=10; i++ ){
        console.log(`${entrada} x ${i} = ${entrada * i}`);
    }
    
} else {
    alert('Debes ingresar un numero');
}


/**
 * Ejercicio 3
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * p.ej. "Hola mundo"
 * Consonantes -> hlmnd
 * Vocales -> oauo
 */

entrada = prompt('Ingresa una oracion');
let size = entrada.length -1 ;
let auxVocales = '', auxConsonantes = '';


//otra opcion es reemplazar las vocales al final solo para no hacer un else en el if
//se puede utilizar includes para buscar las coincidencias de lo de la i
for ( i = 0; i <= size ; i++ ){
    
    if( !(entrada[i] === 'a' || entrada[i] == 'e' || entrada[i] == 'i' || entrada[i] == 'o' || entrada[i] == 'u')){
        
        auxConsonantes += entrada[i];
        //console.log(`Consonantes ${entrada[i]}`);
    } else {
        auxVocales += entrada[i];
        //console.log(`Vocales ${entrada[i]}`);
    }   
}
console.log(`Vocales ${auxVocales.replace(/[" "]/gi, '')}`);
console.log(`Consonantes ${auxConsonantes.replace(/[" "]/gi, '').toLocaleLowerCase()}`);

/**
 * 
 * Ejercicio 4
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 * p.ej. 12 -> 2,4,6,8,10,12
 * 
 */

entrada = parseInt(prompt('Ingresa un numero entre el 10 y 100'));
//no olvidar espacios entre las condicionales
if ( entrada >=10 && entrada <= 100 ){
   
    for ( i = 1; i <= entrada; i++ ){
        if( i % 2 == 0 ){
            console.log(i);
        }
    }
    
} else {
    alert('El numero debe estar entre 10 y 100');
}



/**
 * 
 * Ejercicio 5. Opcional
 * Pedir el usuario una palabra
 * Invertir esa palabra e imprimirla en consola
 * p.ej. 'Hola' -> 'aloh'
 *
 */

//El for debe decrementar en lugar de incrementar al final
//en este caso el iterador debe iniciar con la longitud de lo que queremos recorrer
//el delimitador va a ser i>= 0
//A partir de ahi decrementa

entrada = parseInt(prompt('Escribe una palabra'));

let stringReversed = '';

for (let i = finCadena; i >= 0; i--){
    stringReversed  += entrada[i];
    console.log(stringReversed);//asi se imprime en forma de arbol

}
//nameuser.split('').reverse().join('') //hace ek reverse en una sola linea
