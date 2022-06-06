/**
 * Ejercicio 1
 * 
    <ul id="menu" class="menu">
        <li class="item__menu">Inicio</li>
        <li class="item__menu">Products</li>
        <li class="item__menu">About Us</li>
    </ul>
    Replicar con JS este markup
 */

const tarea1 = () => {
  const contenedor = document.querySelector(".ejerciciouno");
  contenedor.innerHTML = `<ul class="lista" id="lista"></ul>`;
  contenedor.classList.add("list-group");
  // const lista = document.createElement('ul')
  // lista.setAttribute('id', 'lista')
  // // setear clases
  // // mediante atirbutos
  // lista.setAttribute('class', 'lista lista3')
  // // mediante metodos add/remove
  // lista.classList.add('lista2')
  // lista.classList.remove('lista2')
  // contenedor.appendChild(lista)

  let menus = ["Home", "Products", "About Us"];

  let listItems = "";
  menus.forEach((menu) => {
    listItems += ` <li class="item__menu list-group-item">${menu}</li>`;
  });

  console.log(listItems);
  document.querySelector(".lista").innerHTML = listItems;
};

/**
 * Dado un arreglo de koders
 * 1. Generar una lista con la clase koders
 * 2. Agregar a cada koder en esa lista
 * 3. A todos los koders agregarles la clase 'item koder'
 */

let koders = [
  {
    name: "Jorge Luis",
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
  const contenedor = document.querySelector(".ejercicidos");
  contenedor.innerHTML = `<ul class="koders" id="koders"></ul>`;
  contenedor.classList.add("list-group");
  addTextToLi(koders);
};

const addTextToLi = (array) => {
  let listKoders = "";
  array.forEach((element) => {
    listKoders += ` <li class="item-koder list-group-item">${element.name} ${element.lastName}</li>`;
  });
  document.querySelector(".koders").innerHTML = listKoders; //sirve para añadir elemento al contenedor
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

const ejercicio3 = () => {
  const contenedor = document.querySelector(".table");
  contenedor.innerHTML = `
  <tbody class="koders-tbl" id="koders-tbl">
    <thead>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Generacion</th>         
    </thead>
    </tbody>`;
  addTableContent(koders);
};

const addTableContent = (array) => {
  let tableKoders = "";
  array.forEach((element) => {
    tableKoders += `<tr>
      <td>${element.name} ${element.lastName}</td>
      <td>${element.age}</td>
      <td>${element.generation}</td>
      </tr>`;
    //sirve para añadir elemento al contenedor
  });
  console.log(tableKoders);
  document.querySelector(".koders-tbl").innerHTML = tableKoders;
};

/**
 * Ejercicio
 * Dado un array de álbumes
 * Imprimir en un grid de cards con los álbumes
 * Cada card debe tener
 * Id, Titulo e imagen del album
 *
 * Referencia
 * https://getbootstrap.com/docs/5.2/components/card/#grid-cards
 */

const albumes = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
  {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
  },
  {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
  },
  {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    url: "https://via.placeholder.com/600/54176f",
    thumbnailUrl: "https://via.placeholder.com/150/54176f",
  },
  {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    url: "https://via.placeholder.com/600/51aa97",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97",
  },
  {
    albumId: 1,
    id: 10,
    title: "beatae et provident et ut vel",
    url: "https://via.placeholder.com/600/810b14",
    thumbnailUrl: "https://via.placeholder.com/150/810b14",
  },
];

const ejerciciocuatro = () => {
  const contenedor = document.querySelector(".container");
  contenedor.innerHTML = `<div class="row"></div>`;
  addCardsContent(albumes);
};

const addCardsContent = (array) => {
  let tableKoders = "";
  array.forEach((element) => {
    tableKoders += `   
      <div class="col">
        <div class="card" style="width: 15rem;">
         <img src="${element.url}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">Id: ${element.id}</p>          
          </div>
        </div>
      </div>`
  
  });
  console.log(tableKoders);
  document.querySelector(".row").innerHTML = tableKoders;
};
