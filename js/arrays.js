// let newArray = [1, 2, 3, "str", [1, 2]];
// console.log(newArray);

// console.log( newArray[0] );
// console.log( newArray[1] );
// console.log( newArray[4][1] );

// for (i = 0; i <= newArray.length; i++) {
//   console.log(i);
// }

// let arrayToReverse = [1, 2, 3];
// let arrayReversed = [];

// for (i = arrayToReverse.length - 1; i >= 0; i--) {
//   arrayReversed.push(arrayToReverse[i]);
// }

// console.log(arrayReversed);

// .push() --> agrega nuevo item al array, siempre lo agrrega al final
// .pop() --> Elimina nuevo item al array
// reverse()
// unshift

//foreach()

// let arr = [1, 2, 3, 4];

// for ( i = 0; i < arr.length; i++ ) {
//     console.log(arr[i]);
// }

// let arr = [ 10, 20, 30, 40];
// //arr.forEach( (cv, index, arr)  --> base de un foreach
// arr.forEach( (cv, index, arr) => { //cv current value, los elementos son opcionales
//     console.log(cv);//valores dentro del arreglo
//     console.log(index);//indice del arreglo
//     console.log(arr);//es el arreglo en si
// } )

// arr.forEach( currentValue => console.log(currentValue))//es el arreglo en si

let arrCities = ["méxicO", "Rio de janeiro", "Los Angeles"];
//let someString = 'los angeles';

//Escribir una funcion
//Reciba como parametro un array de ciudades
//Retornar las ciudades capitalizadas

let capitalizeCities = (arrCities = []) => {
  arrCities.forEach((currentValue, index, arr) => {
    let words = currentValue.split(" ");

    words.forEach((currentValue) => {
      let primerCaracter = currentValue.charAt(0).toUpperCase();
      let cadenaSinPrimerCaracter = currentValue
        .substring(1, currentValue.length)
        .toLowerCase();
      //let resultado = primerCaracter + cadenaSinPrimerCaracter ;

      console.log(primerCaracter + cadenaSinPrimerCaracter);

      //declarar array vacio y hacer psuh
    });
  });
};

console.log(capitalizeCities(arrCities));

//map

let mapArr = [1, 2, 3, 4];

let doubleArr = mapArr.map((cv, index, arr) => {
  let transformando = cv * 2;
  return transformando;
});

console.log(doubleArr);

let capCities = (arrCities) => {
  return arrCities.map((city) => {
    return `${city[0].toUpperCase()}${city.slice(1).toLowerCase()}`;
  });
};

//console.log(capCities(arrCities));


//








/**
 * Funcion
 * getFirstLast(['hola','mundo'])
 * -> ['ha','mo']
 * .map()
 */


let arrStr = ['hola', 'mundo'];
let getFirstLast =  array  => {
   return array.map( cadena => {    
        return  cadena.substring(0,1) + cadena.slice(-1)
     })
}

console.log(getFirstLast(arrStr));




