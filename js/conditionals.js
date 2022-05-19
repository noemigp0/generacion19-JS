console.log('Conditionals');

//Operadores de asignación
let suma = 0;
let a = 4;
let b = 5;
total = a + b;

// total = total +5;//Esta es la forma larga, en linea 9 forma corta
// total += 5; //Este operador suma una vez su valor los 5

// total = total - 5;//Esta es la forma larga, en linea 9 forma corta
// total -= 5; //Este operador resta una vez su valor los 5

// total = total * 5;//Esta es la forma larga, en linea 9 forma corta
// total *= 5; //Este operador resta una vez su valor los 5

// total = total / 5;//Esta es la forma larga, en linea 9 forma corta
// total /= 5; //Este operador resta una vez su valor los 5

total = total % 3;

console.log(total);

if ( 2 === 2 ){
    console.log('los numeros "2" son iguales');//Esta forma de cadena imprime las comilas en el "2"
} else if( 3 === '3' ) {
   console.log('son iguales 3');
} else {
    console.log('por defecto');
}


//operador ternario
//expresion ? true : false;

console.log('Es par impar');
let numero = 2;

if( numero % 2 == 0){
    console.log('Es par');
} else {
    console.log('Es impar');
}

console.log('Con ternario');

let ternario = numero % 2 == 0 
? 'es par' 
: 
'es impar';

console.log(ternario);

//SWITCH

let age = parseInt(prompt('Ingresa tu edad'));
switch(age) {
    case 17:
        console.log('Es menor de edad');
        break;
    case 18:
        console.log('Es mayor de edad');
        break;    
    default:
        console.log('No es una edad valida');
        break;
}






