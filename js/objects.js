// /**

// //Declara un objeto
// let koder = {
//   name: "Noemi",
//   horario: ["7-10", "10-12"],
//   gender: "F",
//   isActive: true,
//   modules: {
//     js: true,
//     maquetado: true,
//     backend: false,
//     react: false,
//   },
// };

// //formas de acceder a un elemento
// console.log(koder.modules.backend);
// let js = koder["modules"]["js"];
// console.log(js);

// let pasoBackend = koder.modules.backend;

// if (pasoBackend) {
//   console.log(` ${koder.name} si paso el modulo de backend y tiene el horario ${koder.horario[0]}
//     `);
// }

// console.log(koder.isActive ? "active" : "inactive");

// console.log(
//   `Mi nombre es ${koder.name} soy de la generacion ${koder.generation}
//   estoy tomando el bootcamp de ${koder.bootcamp} en un horario de ${
//     koder.horario[0]
//   }
//   actualmente me encuentro ${
//     koder.isActive ? "activa" : "inactiva"
//   } y los modulos que he tomado son:
//   ${koder.modules.js ? "JS" : ""}, ${
//     koder.modules.maquetado ? "maquetado" : ""
//   } ${koder.modules.backend ? "backend" : ""} ,
//   ${koder.modules.react ? "react" : ""} `
// );

// //Añadir nuevas propiedades

// let car = {}
// console.log(car)

// //si no existe la propiedad se añade, si existe se sobreescribe
// car.model = 'jetta'
// console.log(car)

// car.model = 'sentra'
// console.log(car)

// car['year'] = ''

// let koderAssign = {}
// koderAssign.name = "Noemi"
// koderAssign['horario'] = ["7-10", "10-12"]
// koderAssign.gender = 'F'
// koderAssign.isActive = true
// //nested objects
// koderAssign.modules = {}
// koderAssign.modules.maquetado = true
// koderAssign.modules.backend = false
// koderAssign.modules.react = false

// console.log(koderAssign);

// let bracketAssign = {}
// bracketAssign['name'] = "Noemi"
// bracketAssign['horario'] = ["7-10", "10-12"]
// bracketAssign['gender'] = 'F'
// bracketAssign['isActive'] = true
// //nested objects
// bracketAssign['modules'] = {}
// bracketAssign['modules']['maquetado'] = true
// bracketAssign['modules']['backend'] = false
// bracketAssign['modules']['react'] = false

// console.log(bracketAssign);

// let salarios = {
//     'Jorge': '20000',
//     'Lenny': '30000',
//     'Kike': '25000',
//     'Ernesto': '2000'
// }

// //Metodos de objetos
// //Iterando objetos-bucles

// for ( element in salarios ){
//     let key = element
//     let val = salarios[key]
//     console.log(`${key} : ${val}`);

//     //Asi accdeo a la llave
//     //console.log(element);
//     //asi accedo al valor
//     //console.log(salarios[element]);
// }

// //key es como si fuera mi index, pero en lugar de numeros apunta a las llaves del objeto
// for ( key in salarios ){
//     if ( key === 'Jorge'){
//         console.log(salarios[key]);
//     }

//     //Asi accdeo a la llave
//     //console.log(element);
//     //asi accedo al valor
//     //console.log(salarios[element]);
// }

// console.log(Object.keys(salarios));//accede a las llaves en forma de arreglo

let objSalarios = {
  lenny: "30000",
  Ernesto: "20000",
  jorge: "20000",
  Kike: "25000",
};

/**
 * Ejercicio 1:
 * Calcular el total de salarios
 * -> 95000
 */
let auxTotal = 0; //variable auxiliar que suma las cantidades, debe iniciar en 0
for (key in objSalarios) {
  //para iterar

  auxTotal += parseInt(objSalarios[key]);
}

console.log(auxTotal);

/**
 * Ejercicio 2:
 * Pasar el ejercicio 1 a función flecha
 * Debe recibir 1 parametro
 * Objeto de salarios
 */

const totalSalarios = (objeto) => {
  let auxTotal = 0; //variable auxiliar que suma las cantidades, debe iniciar en 0
  for (key in objeto) {
    //para iterar
    auxTotal += parseInt(objSalarios[key]);
  }
  return auxTotal;
};
console.log(totalSalarios(objSalarios));

/**
 * Ejercicio 3:
 * Escribir una funcion que reciba un parametro
 * Verificar si el parametro es un objeto
 * o si es un array
 * p.ej.
 * ·> isAnObjectOrArray( [1,2,3] )
 * -> 'Es un array'
 * ·> isAnObjectOrArray( {key:'value'} )
 * -> 'Es un Objeto'
 * ·> isAnObjectOrArray( 'Hola mundo' )
 * -> 'No es un array ni un objeto'
 *
 *
 * @params {Object}, [Array] ,'string' - Estructura que se quiere validar
 * @return 'String' - mensaje de respuesta
 *
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 *
 */

//let parametro =  '[1,2,3]' ;

let parametro = {
  lenny: "30000",
  Ernesto: "20000",
  jorge: "20000",
  Kike: "25000",
};

//parametro =  [1,2,3]
//parametro = ''
console.log(typeof parametro);

const isAnObjectOrArray = (element) => {
  if (Array.isArray(element)) {
    return "Es un array";
  } else if (typeof element === "object") {
    return "Es un Objeto";
  } else {
    return "No es un array ni un objeto";
  }
};

console.log(isAnObjectOrArray(parametro));
