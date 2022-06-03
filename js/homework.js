/**
 * Ejercicio 1
 * <ul id="menu" class="menu">
        <li class="item__menu">Home</li>
        <li class="item__menu">Products</li>
        <li class="item__menu">About Us</li>
    </ul>
    Replicar con JS este markup
 */

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

let kodersUl = document.createElement("ul");
kodersUl.setAttribute("class", "koders");
body.appendChild(kodersUl);

let koderOptions = document.querySelectorAll(".item-koder");

const addTextToLi = (array) => {  
  array.forEach(element => {
    let liKoder = kodersUl.appendChild(document.createElement("li")); 
    liKoder.textContent = `${element.name} ${element.lastName}`;      
 });
}

addTextToLi(koders);



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
