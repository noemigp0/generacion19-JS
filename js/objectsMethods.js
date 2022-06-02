//assign --> reemplaza las propiedades ya existentes
let objetoOrigen = {
  name: 'Jorge',
  edad: '30'
}
let nuevoObjeto = {
  name: 'Lore'
}

//console.log(Object.assign(objetoOrigen, nuevoObjeto));



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


// Declarando objeto
const job = {
  position: 'cashier',
  type: 'hourly',
  isAvailable: true,
  showDetails() {
      const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

     // console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
  }
};

// Da acceso a las propiedades de un objeti original
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();
// console.log(barista);
// console.log(job);


// Initialize an object
const userObj = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Seal the object
const newObj = Object.seal(userObj);

newObj.password = '*******';
newObj.active = true;

// console.log(newObj);


let salariosEmpleado = {
  'jorge': 300,
  'mario': 400,
  'juan': 500,
  'chris': 600
}

// console.log('total empleado', Object.keys(salariosEmpleado).length);


let total = Object.values(salariosEmpleado).reduce ((acc, salario) => {
  return acc +salario
})

// console.log(total);


/**
 * Ejercicio 1.
 * Realizar una funcion que tome como parametro un objeto
 * y devuelva un array de arrays con la siguiente estructura
 * [ [key, value], [key, value] ]
 * makePairs( { a: 1, b: 2 } ) 
 * => [ ['a', 1], ['b', 2]]
 * 
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 * Se tiene que realizar 2 soluciones, 
 * 1 con Object.entries() y
 *  Otra con .map()
 */
// solución con .entries()
let equipo = { //definimos el objeto
  equipo: 'Equipo 1',
  integrantes: '4'
}

const makePairs = (object) =>  {//recibimos el objeto
    return Object.entries(object) //con entries regresamos el objeto en arreglo
}

//console.log(makePairs(equipo));

// solución con .map()



const makePairsMap = object =>  Object.keys(object).map( cv => [cv,object[cv]]) //

console.log(makePairsMap(equipo));

/**
 * Dado un objeto de salarios
 * Crear una funcion que retorne una lista 
 * con los salarios ordenados de menor a mayor
 * orderSalary( salarios)
 * -> [4000, 5000, 7000] 
 */

 let salarios = {
    'juan': 7000,
    'Albert': 4000,
    'jorge': 5000,    
}
const salariosOrdenados = ( salarios ) => {
  return Object.values(salarios).sort()
}


//console.log(salariosOrdenados(salarios));

