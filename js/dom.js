// 1.- Seleccionar por id
document.getElementById('title')//solo hay un id
//2. Seleccionar por tagname
document.getElementsByTagName('h1')[0]//hay varios tags de h1
//. Seleccionar por clases
document.getElementsByClassName('title')

//seleccionar elementos por tag, class, id
//los siguientes seleccionaran el primer elemento encontrado
document.querySelector('.item')
document.querySelector('#title')
document.querySelector('h1')

//seleccionar elementos por tag, class, id
//seleccionara todos los elementos que coincidan
// let todosLosMenus = document.querySelectorAll('.item')
// toodosLosMenus.forEach((cv) => {
//     console.log(cv);
// })


//Comprobar atributos

//settear, obtener y comprobar

//settear
//Seleccionar el elemento y settearle un valor
let titulo = document.querySelector('.title')
titulo.setAttribute('data-id', 1)

titulo.getAttribute('data-id')


//Verificar si existe un atributo
titulo.hasAttribute('data-id')

//eliminar atributos
//element.removeAttribute(attrName)
titulo.removeAttribute('id')


/**
 * Ejercicio
 * 1. A nuestro elemento ul agregar clase 'lista' y id 'lista'
 * 2. Quitar a todos los elementos de la lista la clase item
 * 3. Todos los elementos de la lista, agregar la clase  'list__item'
 */

let lista = document.querySelector('ul')
lista.setAttribute('class', 'lista')
lista.setAttribute('id', 'lista')



//Toodos los elementos de la lista, agregar la clase  'list__item'

 let opciones = document.querySelectorAll('li')
 console.log(opciones);
 opciones.forEach((cv) => {
     console.log(cv);
     cv.removeAttribute('class')//recordar lo que dice el metodo es decir Attibute
  
 })


//let opcion = document.querySelectorAll('li')
  console.log(opciones);
  opciones.forEach((cv) => {
      console.log(cv)
      cv.setAttribute('class', 'list__item')
  })


  //Crear nuevos elementos HTML
  document.createElement('img')//img es una etiqueta de autocierte

  let listaDos = document.createElement('ul')
  let item1 = document.createElement('li')
  let body = document.querySelector('body')
  item1.textContent = 'item 1'
  listaDos.appendChild(item1)

  let item2 = document.createElement('li')
  item2.textContent = 'item 2'
  listaDos.appendChild(item2)

  for( i=1; i<=10; i++){
      let item =  document.createElement('li')
      item.textContent = `item ${i}`
      listaDos.appendChild(item)

  }



  console.log(listaDos);
  body.appendChild(listaDos)


