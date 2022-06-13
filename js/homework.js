

  let persona = {
    name: 'jorge',
    age: 20
  }

  // destrcuturacion de objetos--para substraer las propiedades que me interesan
let { name:nombre, age:edad } = persona
console.log(nombre)
console.log(edad)


// destrcuturacion de arreglos

let frutas = ['piña', 'melon', 'sandia']

let [fruta1, fruta2, fruta3] = frutas
console.log(fruta1, fruta2, fruta3);