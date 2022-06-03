/**
 * Dado un array de objetos koders
 * Imprimir en consola, todos los nombres de cada koder
 *
 * 'jorge luis Camarillo tiene 30 años y es de la generacion 6'
 * 'Erik Gutierrez tiene 30 años y es de la generacion 16'
 * ....
 *
 */
 let koders = [
  {
    name: "jorge luis",
    lastName: "Camarillo",
    age: 30,
    generation: 6,
    modulos: ["js", "node js", "cloud"],
  },
  {
    name: "Erik",
    lastName: "Gutierrez",
    age: 20,
    generation: 15,
    modulos: ["js"],
  },
  {
    name: "Sara",
    lastName: "Reveles",
    age: 24,
    generation: 12,
    modulos: ["js"],
  },
];
const getInfoCoder = (objKoder) => { 
  let info = ''
  objKoder.forEach((cv) => {
    info += `${cv.name} tiene ${cv.age} y es de la generacion ${cv.generation} \n`;
  });
  return info
}
console.log(getInfoCoder(koders));

const printName = (arrObj) => {//revisar ejemplos de find
  let info = ''
  arrObj.find(object => {
    info += `${object.name} tiene ${object.age} y es de la generacion ${object.generation} \n`;
    console.log(object.modulos[1]);//para acceder a una propiedad de un objeto con valor tipo arreglo
  })
  return info
}

console.log(printName(koders));
/**
 * Del mismo array de koders
 * Obtener la suma de todas las edades
 *
 */
const getAgeSum = (objKoder) => { 
  let sumaEdades = 0;
  objKoder.forEach((cv) => {
    sumaEdades += cv.age;
  });
  return sumaEdades
}
console.log(`La suma de todas las edades es ${getAgeSum(koders)}`);
/**`
 * Del objeto library
 * 1. Obtener el numero de libros que se estan leyendo
 * 2. Obtener una lista de todos los autores
 * 3. Obtener una lista de todos los Libros
 *
 */
let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
const getLibraryInfo = (objLibrary) => {
  let librosLeidos = 0;
  let listaAutores = [];
  let listaLibros = [];
  objLibrary.forEach((cv) => {
    if (cv.readingStatus === true) {
      librosLeidos += cv.readingStatus;
    }
    listaAutores.push(cv.author);
    listaLibros.push(cv.title);
  });
  console.log(listaAutores);
  console.log(listaLibros);
  return `Numero de libros que se estan leyendo: ${librosLeidos} \n lista de todos los autores ${listaAutores}
  Lista de todos los Libros  ${listaLibros}`;
 }
console.log(getLibraryInfo(library));





