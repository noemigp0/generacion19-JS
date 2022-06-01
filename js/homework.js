// Ejercicio
/**
 * Del siguiente objeto
 * Realizar una función que 
 * 1. Calcule el numero de empleados
 * 2. Obtenga el total a pagar
 * employesAndTotal( { 'Albert': 50000, 'jorge': 50000 })
 * -> Son 3 empleados y el total es 100000
 */

 let salarios = {
  'juan': 30000,
  'Albert': 50000,
  'jorge': 50000
}

const employesAndTotal = ( obj ) => {
  let totalPagar = 0;
    for (item in obj){
      totalPagar += obj[item]

    }
    return `Son ${Object.keys(obj).length} empleados y el total a pagar es ${totalPagar}`
}

console.log(employesAndTotal(salarios));



/**
* Ejercicio 2.
* Dado un objeto inicial, hacer los siguientes puntos 
* 
* 1. Agregar el lenguaje 'Go' a la lista de lenguajes
* 2. Cambiar el nivel a 4
* 3. Eliminar la propiedad avatar
* 4. Agregar una nueva propiedad de edad y poner el valor de 30
* 5. Imprimir en consola todos los lenguajes dominados
* 6. Clonar el objeto en uno nuevo
* 7. Imprimir en consola el nuevo objeto
* 
* @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
*/

let koder = {
  languages: ["JavaScript", "Python", "Ruby"],
  isMentor: true,
  level: 3,
  avatar: "https://picsum.photos/200/300"
}

//1. Agregar el lenguaje 'Go' a la lista de lenguajes
console.log(koder);
koder.languages.push('Go');
console.log(koder);
// 2. Cambiar el nivel a 4
koder.level = 4;
console.log(koder);
// 3. Eliminar la propiedad avatar
delete koder.avatar;
console.log(koder);

// 4. Agregar una nueva propiedad de edad y poner el valor de 30
koder.edad = 30
console.log(koder);
//5. Imprimir en consola todos los lenguajes dominados
console.log(`${koder.languages}`)
// 6. Clonar el objeto en uno nuevo
let newObject = {};
console.log(newObject);
Object.assign( newObject, koder);

// 7. Imprimir en consola el nuevo objeto
console.log(newObject);



/**
* Estudiar los metodos de objetos
* https://www.w3schools.com/js/js_object_methods.asp
* https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript
* https://www.programiz.com/javascript/library/object/assign
* */



// Declarando un objeto
const employees = {
  boss: "Michael",
  secretary: "Pam",
  sales: "Jim",
  accountant: "Oscar",
};

// Obtiene las llaves (keys) de un objeto y los transforma a un arreglo
const keys = Object.keys(employees);
// Obtiene los valores de un objeto y los transforma a un arreglo
const values = Object.values(employees);

//console.log(keys);
//console.log(values);

// Teniendo las llaves en forma de arreglo es posible acceder a la propiedades con un foreach
Object.keys(employees).forEach((key) => {
  let value = employees[key];

  //console.log(`${key}: ${value}`);
});

// Declarando objeto
const user = {
  username: "AzureDiamond",
  password: "hunter2",
};


// Bloqueando el objeto para prevenir adiciones y modificaciones, 
//esta copiando el objeto pero sin permitir nuevas modificaciones
const newUser = Object.freeze(user);

newUser.password = "*******";
newUser.active = true;

//console.log(newUser);



// Declarando objeto
const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};

// Obtiene un arreglo de arreglo con la llave y el valor
const entries = Object.entries(operatingSystem);

//console.log(entries);
