//functions

function retorno(a, b) {
  return a > b ? a : b;
}

// const arrowFunctionName1 = ( a, b ) => {
//     return a + b;
// }

// const rrowFunctionName2 = ( a ) => {
//     return a + b;
// }

// const rrowFunctionName3 =  a  => {
//     return a + b;
// }

// const rrowFunctionName4 =  ()  => {
//     return a + b;
// }

//Ejemplo



// function reversedStr(strUser) {
//   //sentencias
//   let strUser = prompt("Dame una palabra", "str").toLowerCase();
//   let auxStrReversed = "";
//   for (i = strUser.length - 1; i >= 0; i--) {
//     auxStrReversed += strUser[i];
//   }
//  return auxStrReversed;
// }
// alert(reversedStr(strUser));
// console.log(strReverse());



const convertirFarenheit = ()  => {
    let celsius = prompt('Ingrese los grados celcius en tu localidad');
    return `${parseInt(celsius) * 9/5 + 32} °F`;
  }
  
console.log(convertirFarenheit());


const nameFunction = () => 'hola'





