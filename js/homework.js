
/**
 * Funcion que pida una palabra al usuario
 * Invierta la palabra
 * y la retorne en un alert
 * reversedString('hola') -> 'aloh' 
 */

let strUser = prompt("Dame una palabra", "str").toLowerCase();

function reversedStr(strUser) {
  //sentencias
 
  let auxStrReversed = "";
  for (i = strUser.length - 1; i >= 0; i--) {
    auxStrReversed += strUser[i];
  }
 return auxStrReversed;
}
alert(reversedStr(strUser));

/**
 * Funcion que pida 3 numeros como parametro
 * 2 numeros obligatorios y 1 opcional con valor de 3
 * Arroje la suma de esos 3 numeros
 * Posibles resultados
 * -> addThreeNumbers(3,4,5) -> 12
 * -> addThreeNumbers(3,4) -> 10
 * -> addThreeNumbers(3) -> 'Faltan datos'
 * -> addThreeNumbers() -> 'Faltan datos'
 */

 let numero1 = prompt('Ingresa el valor de numero1');
 let numero2 = prompt('Ingresa el valor de numero2');
 let numero3 = prompt('Ingresa el valor de numero3');


 if ( numero2 === null || numero3 === null ){
      alert('Faltan datos');     
} else {

  alert(sumaNumeros(numero1, numero2, numero3));
  alert(sumaNumeros(numero1, numero2));
  numero1 = null;
  if( numero1 === null){
    alert('Faltan datos'); 
  } else {
    alert(sumaNumeros(numero1));
    alert(sumaNumeros());
  }
  
}   
 
 function sumaNumeros(numero1, numero2, numero3 = '3'){   
   
     return parseInt(numero1) + parseInt(numero2) + parseInt(numero3);
 }



 

/**
 * Funcion que pida al usuario los grados Centigrados en su localidad
 * Convertirlos a grados fahrenheit
 * Arrojar un alert con el resultado
 * -> convertTemp(25) -> La temperatura es de 77 ºF
 * -> convertTemp() -> 'Faltan datos'
 */
 let celsius = prompt('Ingrese los grados celcius en tu localidad');



 function gradosAFarenheit(grados){  
  return `${parseInt(grados) * 9/5 + 32} °F`;
}

alert(gradosAFarenheit(celsius));

/**
 * Funcion que pida al usuario los grados Centigrados en su localidad
 * Convertirlos a grados fahrenheit
 * Arrojar un alert con el resultado
 * -> convertTemp(25) -> La temperatura es de 77 ºF
 * -> convertTemp() -> 'Faltan datos'
 */



/**
 * Funcion que imprima las tablas del 1 al 10
 */

function tablasMultiplicar(){
  for (let i = 1; i <= 10; i++){
      for(let k = 1; k <= 10; k++) {
          console.log(`${i} x ${k} = ${i*k}`);
      }
  }
}

tablasMultiplicar();
/**
 * Funcion que pida al usuario un numero (N) entre 1 y 100 
 * Mandar un alert con suma de 1 a N
 * Valor por defecto 3
 * addNumberLimit() -> 6
 * addNumberLimit(4) -> 10
 * addNumberLimit(5) -> 15
 */