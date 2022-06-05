/**
 * Ejercicio 1
 * <ul id="menu" class="menu">
        <li class="item__menu">Home</li>
        <li class="item__menu">Products</li>
        <li class="item__menu">About Us</li>
    </ul>
    Replicar con JS este markup
 */

const ejercicio1 = () => {
  let menuList = document.createElement("ul");
  let body = document.querySelector("body");

  let homeLi = document.createElement("li");
  homeLi.textContent = "Home";
  let productLi = document.createElement("li");
  productLi.textContent = "Products";
  let aboutLi = document.createElement("li");
  aboutLi.textContent = "About Us";

  menuList.appendChild(homeLi);
  menuList.appendChild(productLi);
  menuList.appendChild(aboutLi);
  body.appendChild(menuList);

  let menu = document.querySelector("ul");
  menu.setAttribute("class", "menu");
  menu.setAttribute("id", "menu");
  let menuOptions = document.querySelectorAll("li");

  menuOptions.forEach((cv) => {
    cv.setAttribute("class", "item__menu");
  });
};

/**
 * Dado un arreglo de koders
 * 1. Generar una lista con la clase koders
 * 2. Agregar a cada koder en esa lista
 * 3. A todos los koders agregarles la clase 'item koder'
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
    modulos: ["Node"],
  },
  {
    name: "Sara",
    lastName: "Reveles",
    age: 24,
    generation: 12,
    modulos: ["js"],
  },
];

//let koderOptions = document.querySelectorAll(".item-koder");


const ejercicio2 = () => {
  addTextToLi(koders);

}

const addTextToLi = (array) => {
  let kodersUl = document.createElement("ul");
  kodersUl.setAttribute("class", "koders");
  let body = document.querySelector("body");
  body.appendChild(kodersUl);

  array.forEach((element) => {
    let liKoder = kodersUl.appendChild(document.createElement("li"));
    liKoder.textContent = `${element.name} ${element.lastName}`;
  });
};

/**
 * Opcional
 * Del mismo arreglo de koders
 * 1. Generar una tabla de koders con las columnas
 *   - Nombre completo
 *   - Edad
 *   - Generación
 *
 *   Opcional -Modulos cursados
 *
 * Referencia: https://slack-files.com/TCRFJBKB6-F03J4CBCBA7-8b1c39e7bc
 *
 */

let contentBody = document.querySelector("tbody");
koders.forEach((koder, index, array) => {
  let tr = document.createElement("tr");
  let tdName = document.createElement("td");
  let tdAge = document.createElement("td");
  let tdGen = document.createElement("td");

  tdName.textContent = koder.name;
  tdAge.textContent = koder.age;
  tdGen.textContent = koder.generation;

  tr.appendChild(tdName);
  tr.appendChild(tdAge);
  tr.appendChild(tdGen);

  console.log(tr);

  contentBody.appendChild(tr);
});



const tarea1jorge = () =>{
const body = document.querySelector('body')
const lista = document.createElement('ul')
lista.setAttribute('id', 'lista')
//settear clases
//mediante atributos
lista.setAttribute('class', 'lista lista2')
//mediante metodos add/remove
lista.classList.add('lista')
lista.classList.add('lista2')
lista.classList.add('lista3')//añade estas clases
lista.classList.remove('lista2')


let menus = ['Home', 'Products', 'About us']

menus.forEach(menu => {
  let li = document.createElement('li')
  li.textContent = menu
  
});

}

document.querySelector('body').appendChild(lista)