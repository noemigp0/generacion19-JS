// Arrow fuunction
// Pedir al usuario una cadena de texto
// Verificar si esa oracion es un palindromo
// isPalindrome('hola') -> No es un palindromo
// isPalindrome('oso') -> SI es un palindromo

// anita lava la tina
// oso
// seres

// funcion de retorno




//agregar que pueda remover los acentos, y a minusculas

const isPalindrome = ( str ) => {
  str
   let auxSinEspacios = '';
    for (i = 0; i < str.length; i++) {
        if (str[i] !== ' '){
            auxSinEspacios += str[i];
        }
       
      }

    let auxStrReversed = "";
    for (i = auxSinEspacios.length - 1; i >= 0; i--) {
      auxStrReversed += auxSinEspacios[i];
    }
    
    console.log(auxSinEspacios );
    console.log(auxStrReversed );
   return auxSinEspacios === auxStrReversed ? true : false;

}


let palabra = prompt('Ingresa una palabra').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

console.log(isPalindrome(palabra) ? 'Es palindromo' : 'No es palindromo');


// function reversedStr(strUser) {
//     //sentencias
//     let strUser = prompt("Dame una palabra", "str").toLowerCase();
//     let auxStrReversed = "";
//     for (i = strUser.length - 1; i >= 0; i--) {
//       auxStrReversed += strUser[i];
//     }
//    return auxStrReversed;
//   }
//   alert(reversedStr(strUser));
//   console.log(strReverse());

// console.log(isPalindrome(palabra));

