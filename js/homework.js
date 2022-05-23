// Ejercicios

/**
 * Ejercicio 1
 * Escribir un programa de arroje la suma de los multiplos de 3, 5 o 7 que hay entre 1 y 100
 * Resolver con For, While y do While
 */

//mult

/**
 * Ejercicio 2
 * Pedir el usuario 1 numero entre 1 y 100
 * sumar todos los numeros entre el 1 y este numero
 * Mandar un alert con el  total
 * Resolver con For, While y do While
 * p.ej. 5
 * ->  15
 */

 let numero = prompt("Ingresa un numero entre 1 y 100");
 //Que significa Nan cuando se convierte a int desde el promt
 let auxSuma = 0;
 if (numero !== null && numero >= 1 && numero <= 100) {
   for (let i = 0; i <= parseInt(numero); i++) {
     auxSuma += i;
   }
   alert(`Total con for ${auxSuma}`);
 } else {
     alert('Ingresa un numero entre 1 y 100');
     console.error("El numero no puede ser nulo");
 }
 auxSuma = 0;
 if (numero !== null) {
   let contador = 0;
   while (contador <= numero) {
     auxSuma += contador;
     contador++;
   }
   alert(`Total con while ${auxSuma}`);
 } else {
   alert('Ingresa un numero entre 1 y 100');
   console.warn("El numero no puede ser nulo");
 }
 auxSuma = 0;
 if (numero !== null) {
   let contador = 0;
   do {
     auxSuma += contador;
     contador++;
   } while (contador <= numero);
   alert(`Total con dowhile ${auxSuma}`);
 } else {
   alert('Ingresa un numero entre 1 y 100');
   console.warn("El numero no puede ser nulo");
 }

/**
 * Ejercicio 3
 * pedir una oracion al usuario
 * Contar las letras "a" y "e" y espacios,
 * Resolver con For, While y do While
 *
 * p.ej. 'hola kodErs'
 * ->  A -> 1
 * ->  E -> 1
 * ->  Espacios -> 1
 */
//No todas las aves pueden volar    a = 4 , e= 3, espacions = 5
let oracion = prompt('Ingresa una oracion');


let auxA = 0;
let auxE = 0;
let auxEspacios = 0;

if( oracion !== null){
    let longOracion = oracion.length -1;
    for( let i=0; i <= longOracion; i++ ){

        switch (oracion.toLocaleLowerCase()[i]) {        
            case 'a':
                auxA++;
                break;
            case 'e':
                auxE++;
                break;
            case ' ':
                auxEspacios++;
            default:
                break;
        }
    }
    
    alert(`Resultados con for a -> ${auxA} \n e -> ${auxE} \n espacios -> ${auxEspacios}`);
} else {
    alert('Debes ingresar una oracion');
}


auxA = 0;
auxE = 0;
auxEspacios = 0;
let contador = 0;

if( oracion !== null){
    let longOracion = oracion.length -1;
    
    while( contador <= longOracion ){
        switch (oracion.toLocaleLowerCase()[contador]) {        
            case 'a':
                auxA++;
                break;
            case 'e':
                auxE++;
                break;
            case ' ':
                auxEspacios++;
            default:
                break;
        }
        contador++;
    }

    alert(`Resultados con while a -> ${auxA} \n e -> ${auxE} \n espacios -> ${auxEspacios}`);
    
    
} else {
    alert('Debes ingresar una oracion');
}

auxA = 0;
auxE = 0;
auxEspacios = 0;
contador = 0;

if( oracion !== null){
    let longOracion = oracion.length -1;
    
    do{
        switch (oracion.toLocaleLowerCase()[contador]) {        
            case 'a':
                auxA++;
                break;
            case 'e':
                auxE++;
                break;
            case ' ':
                auxEspacios++;
            default:
                break;
        }
        contador++;
    }while( contador <= longOracion );

    alert(`Resultados con do-while a -> ${auxA} \n e -> ${auxE} \n espacios -> ${auxEspacios}`);
    
    
} else {
    alert('Debes ingresar una oracion');
}


/**
 * Ejercicio 4
 * Estudiar acerca del tema Funciones
 * ¿Qué son?
 * Parametros y argumentos de una funcion
 * Parametros de una funcion
 * Parametros opcionales
 * Parametros por defecto (default)
 *
 * Referencias
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
 * https://www.programiz.com/javascript/function
 *
 */
