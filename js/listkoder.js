

//const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {
const ajaxXHR = (callback, url, method = "GET") => {
  const xhttp = new XMLHttpRequest();
  xhttp.open(
    method,
    `https://koder19g-ngp-default-rtdb.firebaseio.com/${url}`,
    true
  );
  xhttp.onload = function (data) {
    if (data.target.status >= 200 && data.target.status <= 399) {
      let response = JSON.parse(data.target.response);
      //console.log(response);
      callback(response);
    }
  };
  if (method === "GET" || method === "DELETE") {
    xhttp.send();
  } else {
    xhttp.send(JSON.stringify(obj));
  }
};

/* Estructura de cada koder
    {
      name: 'jorge',
      age: 30,
      bootcamp: 'js',
      biography: 'lorem ipsum dolot sit amet'
    }
  */

// uso de la funcion
// GET , DELETE
// ajaxXHR(nombreDeFuncionAllamar, `/koders/.json`, 'GET')
// ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'DELETE')

// POST, PUT, PATCH
// ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'POST', obj)
// ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'PUT', obj)
// ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'PATCH', obj)

// Listar todos los koders
console.log("SU codigo para editar un koder aquí");
let deleteButton =""
let deleteButtonValue=""
const listKoders = (objKoders) => {
  let template = "";
  for (koder in objKoders) {
    
    let koderInfo = objKoders[koder];
    template += `
    <br>
    <div class="col-sm-6">
        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">${koderInfo.name}</h5>
                  <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                 <p class="card-text">Edad: ${koderInfo.age} </p>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                 <p class="card-text">Bootcamp: ${koderInfo.bootcamp} </p>
              </div>
            </div>
          </div> 
                <p class="card-text">${koderInfo.biography}</p>                
                <a href="/interior.html?koderkey=${koder}" class="btn btn-link">Ver koder</a>
                <a href="/updatekoder.html?koderkey=${koder}" class="btn btn-link">Editar koder</a>
               
            </div>
        </div>
    </div>`;
  }

  document.querySelector(".all__posts").innerHTML = template;
  
  // deleteButton = document.querySelector("#delete-btn")
  // deleteButtonValue = document.querySelector("#delete-btn").value
  // deleteButton.addEventListener("click", () => {
  //   console.log(deleteButtonValue);
  
  // })
  
  

};

document.addEventListener("DOMContentLoaded", () => {
  ajaxXHR(listKoders, `/koders/.json`, "GET");
});


const confirmKoderDeleted = (response) => {
  console.log(response)
  if (response === null){
    alert("Registro eliminado, favor de actualizar", "warning")
  }
}


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


const deleteKoder = (idKoder) => {
  //deleteButtonValue = document.querySelector("#delete-btn").value
  console.log(idKoder);
  //ajaxXHR(confirmKoderDeleted, `/koders/${idKoder}.json`, 'DELETE')
}