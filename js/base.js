// console.log('Hola Koders');

// //crear variables
// //let, const, var <-- Son palabras reservadas

// //variables
// var koder = 'Noemi';
// let koder2= 'Noemi';

// //constantes
// const  koder3 = 'Ernesto';
// const URL = 'https://www.google.com';
// const PI = 3.1416;

// console.log(koder, koder2, koder3);

//  koder = 'Luis';
//  koder2 = 'Lorena';


// console.log(koder, koder2, koder3);


// //Concatenar variables
// let valor1 = '4';
// let valor2 = 5;

// console.log(valor1 + valor2 );


//  // `` comillas invertidas
//  //template strings  `Lo que va aqui adentro se llama template literal`
//  //strings literals
//  //placeholders--> asi se llama esta forma de concatenar
//  // `string o cadena de strings ${variable}`

//  let koderExample = 'Koder Example';
//  console.log(`Hola koder ${koderExample}`); 
 
//  //dentro de ${aqui pueden ir operaciones tambien}
//  const age = 30;
//  console.log(`Tienes ${age - 2} años`);

 //Pedir valores al usuario

// let nombreKoder = prompt('Dame tu nombre', 'Noemi');

// if (nombreKoder === null) {
//     console.log('Nombre vacio');
// } else {
//     console.log(nombreKoder);
// }



 //Convertir string a numero


//  let ageKoder = prompt('Dame tu edad', 28);
//  console.log(ageKoder);
//  let ageKoderInt = parseInt(ageKoder); 
//  console.log(ageKoderInt);



 //Pedir al usuario los grados celcius en su locaLidad
 let celsius = prompt('Ingrese los grados celcius en tu localidad');
 //convertir centius to farenheit
 let celciusToInt = parseInt(celsius);
 console.log(typeof(celciusToInt));
 //Celsius a farenheit
 //Celsius * 9/5 + 32

 let farenheit = celciusToInt * 9/5 + 32;

 console.log(`Los grados farenheit son ${farenheit}`);
