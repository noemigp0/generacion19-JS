// const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {
//     const xhttp = new XMLHttpRequest()
//     xhttp.open(
//       method,
//       `https://koder19g-ngp-default-rtdb.firebaseio.com/${url}`,
//       true
//     );
//     xhttp.onload = function(data) {
//         if(data.target.status >= 200 && data.target.status <= 399){         
//           let response = JSON.parse(data.target.response)          
//             callback(response)
//         }
//     }
//     if(method === 'GET' || method === 'DELETE'){
//         xhttp.send()
//     } else {
//       xhttp.send( JSON.stringify(obj) )
//     }
//   }
  

// Update Koder
console.log('SU codigo para editar un koder aquí')


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

let idKoder = window.location.search.substring(10);
let name = document.getElementById("name");
let age = document.getElementById("age");
let bootcamp = document.getElementById("bootcamp");
let biography = document.getElementById("biography");


const setInfoKoder = ( response ) => { 
  console.log(response);
  name.value = response.name
  age.value = response.age
  bootcamp.value = response.bootcamp
  biography.value = response.biography
}

const infoKoderUpdated = (response) => { 
  alert("Registro actualizado", 'success')
  
}

document.addEventListener('DOMContentLoaded', () => {
  //ajaxXHR = (callback, url, method = 'GET', obj = {} )
  //ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'PATCH', obj)
  //ajaxXHR(setInfoKoder, `/koders/${idKoder}.json`, 'PATCH');
  //ajaxXHR(setInfoKoder, `/koders/${idKoder}.json`, "GET");

  fetch(`https://koder19g-ngp-default-rtdb.firebaseio.com/koders/${idKoder}.json`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}` // si si, lanzamos un error con un mensaje
      );
    } else {
      return response.json(); // sino, retornamos la respuesta al siguiente then
    }
  })
  .then((response) => {
    setInfoKoder(response);
  });
});

let updateButton = document.getElementById("update");
updateButton.addEventListener("click", () => { 
  let koderUpdated = {
    name: name.value,
    age: age.value,
    bootcamp: bootcamp.value,
    biography: biography.value
  };


  if (name.value === "" || age.value === "" || bootcamp.value === '' || biography.value === '') {
    alert("Debe llenar todos los campos", 'warning')
  } else {
    //ajaxXHR(infoKoderUpdated, `/koders/${idKoder}.json`, "PATCH", koderUpdated);



    fetch ( `https://koder19g-ngp-default-rtdb.firebaseio.com//koders/${idKoder}.json`, {
    method: 'PATCH',
    body: JSON.stringify(koderUpdated),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then(response => {
    return response.json()
}).then(finalResponse => {
    if( !finalResponse) {
     
    }else {
      infoKoderUpdated(finalResponse)
    }
}).catch( err => {
    console.log(err)
})
  }
  }
  
)
