console.log('Ejercicio con ternario');

//Pedir al usuario 2 numeros
//Comprobar si a es mayor o menor que b
//Imprimir en consola el resultado
//5 es menor que 6


//Mi solucion
let numero1 = parseInt(prompt('Ingrese numero 1'));
let numero2 = parseInt(prompt('Ingrese numero 2'));

let esMenor = numero1 < numero2 ? `El numero ${numero1} es menor que ${numero2}` : `El numero ${numero2} es menor que ${numero1}`;
console.log(esMenor);


//Solucion mentor  //revisar
let esMenorSM = numero1 === numero2 ? (
    numero1 < numero2 ? 
    `El numero ${numero1} es menor que ${numero2}` 
    : 
    `El numero ${numero2} es menor que ${numero1}`
):
` ${numero1} y ${numero2} son iguales`;
 console.log(esMenorSM);
