//funciones

// let strUser = prompt('Dame una palabra', 'str').toLowerCase();
// let strReversed = '';

// for( i = strUser.length -1; i >= 0; i-- ){
//     strReversed += strUser[i];
// }
// console.log(strReversed);

function reversedStr() {
  //sentencias
  let strUser = prompt("Dame una palabra", "str").toLowerCase();
  let strReversed = "";
  for (i = strUser.length - 1; i >= 0; i--) {
    strReversed += strUser[i];
  }
  console.log(strReversed);
}

console.log("Otras sentencias de Js");


/**
 * Ejercicio 1
 * Escribir un programa de arroje la suma de los multiplos de 3, 5 o 7 que hay entre 1 y 100
 * Resolver con For, While y do While
 */


function sumaMultiplos(){

 let multiplosSeis = 0;
 let multiplosTres = 0;
 let multiplosSiete = 0;
 
 for (let i = 1; i <= 100; i++) {
   if (i % 6 === 0) { //se puede con un solo if y or
     multiplosSeis += i;
   }
   if (i % 3 === 0) {
     multiplosTres += i;
   }
 
   if (i % 7 === 0) {
     multiplosSiete += i;
   }
 }
 
 console.log(
   `Total multiplos de 3: ${multiplosTres} \nTotal multiplos de 6: ${multiplosSeis} \nTotal multiplos de 7: ${multiplosSiete} `
 );
 
 alert(
   `Respuesta con for, Total sumatoria de los mutiplos de 3,6,7 es: ${
     multiplosTres + multiplosSeis + multiplosSiete
   }`
 );

}


function addDivisors(){
    let suma=0
    for (let i = 1 ; i <= 100 ; i++){
        if (i % 3 == 0 ){
            suma+=i
        } else if (i % 5 == 0){
            suma+=i
        } else if( i % 7 == 0){
            suma+=i
        }
    } console.log(suma)
}
// addDivisors()
function addNumbers(){
    counter= Number(prompt('Dame un número:'))
    suma=0
    while (counter >= 0){
        suma+=counter
        counter--
    }
    console.log(suma)
}
function addCharacter(){
    let string = prompt('Dame una oración:') //convertir a lowecase desde aqui
    let fin = string.length - 1
    let counter2 = 0
    let vowelsA=0
    let vowelsE=0
    let vowelsS=0
    do{
        switch (string.toLowerCase()[counter2]){
            case 'a':
                vowelsA++
                break
            case 'e':
                vowelsE++
                break
            case ' ':
                vowelsS++
                break
            default:
                break
        }
        counter2++
    }while (counter2 <= fin);
    console.log(`Letras a son: ${vowelsA}`);

    //otra forma de usar cobnsole log
    console.log('Letras A -->', vowelsA);
    console.log(`Letras e son: ${vowelsE}`)
    console.log(`Espacios son: ${vowelsS}`)
}


//funciones de retorno

function getNumber(){
    let retorno = 'mensaje de retorno';
    console.log('pasos intermedios');
    return retorno;
}

console.log(getNumber());


function getNumberLight(){
    return 'mensaje de retorno'
}

// function suma(){
//     return 8 + 10
// }


// console.log(suma());



function abordar(){
    return 'mensaje de retorno';
}

function comprarBoleto(){
    return 'comprar boleto';
}

function descender(){
    return 'descender';
}


function funcionPrincipal(){
    let abordarAutobus = abordar();
    let comprarBoletoautobus = comprarBoleto();
    let descenderAutobus = descender();

    console.log(abordarAutobus);
    console.log(comprarBoletoautobus);
    console.log(descenderAutobus);
}


//Funciones con parametros
//los parametros van de 0 a N

let a = 6;
let b = 7;
function suma ( perro, gato ) {
    let total = 0;
    total = perro + gato;
}


//parametros por defecto

function sumaOpncional( p1, p2, p3 = 4){
    console.log(p1, p2, p3);
}



//ejercicio 
//Realiza una funcion que pida al usuario 3 numeros
//retorne la suma de esos 3 numeros


let numero1 = parseInt(prompt('Ingresa el valor de numero1'));
let numero2 = parseInt(prompt('Ingresa el valor de numero2'));
let numero3 = parseInt(prompt('Ingresa el valor de numero3'));

function sumaNumeros(numero1, numero2, numero3){
    return numero1 + numero2 + numero3;
}

let totalSuma = sumaNumeros(numero1, numero2, numero3);
alert(totalSuma);





