let nombres = ["jorge", "ana", "ivan", "sergio", "oscar"];

let filtrados = nombres
  .filter((nombre, index, arr) => {
    
      nombre.charAt(0) === "a" ||
      nombre.charAt(0) === "e" ||
      nombre.charAt(0) === "i" ||
      nombre.charAt(0) === "o" ||
      nombre.charAt(0) === "u"
     {
      return nombre;
    }
  })
  .map((nameFiltered) => {
    let firstLetter = nameFiltered.charAt(0).toUpperCase();
    let restName = nameFiltered.substring(1).toLowerCase();

    return firstLetter + restName;
  })
  .reverse()
  .join();

console.log(filtrados);

//dado un arreglo

let counter = 0;

let arr = [
  [1, 2, 3],
  [1, 3, 2],
  [3, 2, 1],
];

const additionMultiArr = (arregloDeArreglos) => {
  arr.forEach((arreglo) => {
    arreglo.forEach((numero) => {
      counter = counter + numero;
    });
  });
  return counter;
};



//Filtra del arreglo solo la manzana
// ['manzana','pera','manzana'].filter( ( fruta ) => fruta === 'manzana' )

// ['aaron', 'pedro', 'carlos'].filter( (word) => word.charAt(0) === 'a')
