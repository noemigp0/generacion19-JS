//1. Cambiar url de firebase por mi url
const ajaxXHR = (callback, url, method = "GET", obj = {}) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open(
    method,
    `https://koder19g-ngp-default-rtdb.firebaseio.com${url}`,
    true
  );
  xhttp.onload = function (data) {
    if (data.target.status >= 200 && data.target.status <= 399) {
      let response = JSON.parse(data.target.response);
      callback(response);
    }
  };
  if (method === "GET" || method === "DELETE") {
    xhttp.send();
  } else {
    xhttp.send(JSON.stringify(obj));
  }
};

// Create Koder
console.log("SU codigo para crear un koder aquí");

//2.- Declarar funsion solo para Obtener valores de los inputs y crear estrcutura que se mandara a la B.D

let name = document.querySelector("#name");
let age = document.querySelector("#age");
let bootcamp = document.querySelector("#bootcamp");
let biography = document.querySelector("#biography");

const getKoderInfo = () => {
  //declarando funsion

  // retornando Estructura de cada koder con los valores ingresados en los inputs

  let koderStrcuture = {
    name: name.value,
    age: parseInt(age.value),
    bootcamp: bootcamp.value,
    biography: biography.value,
  };
  return koderStrcuture;
};

//Esta funsion es para los alerts, el cdigo es de bootstrap
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

//4.- Esta funsion es la que recibe la respuesta del nuevo koder registrado
const gettingIdKoderRegistered = (response) => {
  //console.log(response); //probando response


  if (response.name.length > 0) {
    //validando que el hash del id contenga informacion
    console.log(response.name);
    alert(`Koder ${response.name} registrado con exito`, "success"); //llamando a la funsion de alert, si todo sale bien se mostrara

    //las siguientes lineas son para limpiar los campos
    name.value = "";
    age.value = "";
    bootcamp.value = "";
    biography.value = "";
  } else {
    alert(`Algo salio mal`, "danger");
  }
};

//3.- Añadir evento al boton
let registryButton = document.querySelector("#add");
//Al boton registryButton le añado el evento click y defno la funsion que ejecutara --> "() =>"
registryButton.addEventListener("click", () => {
  let objKoder = getKoderInfo(); //almaceno koderStructure con valores que es lo que me esta retornando getKoderInfo()

  //llamando a la funsion de jorge para hacer el registro del koder

  if (name.value === "" || age.value === "" || bootcamp.value === '' || biography.value === '') {
    alert("Debe llenar todos los campos", 'warning')
  } else {
    ajaxXHR(gettingIdKoderRegistered, `/koders.json`, "POST", objKoder);
  }
  //en la linea de arriba la funsion gettingIdKoderRegistered, es la que va a recibir el id que nos responde firebase cuando un nuevo registro se ha generado
});
