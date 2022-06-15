

console.log("SU codigo para editar un koder aquí");

const listKoders = (objKoders) => {
  let template = "";
  for (koder in objKoders) {
    let koderInfo = objKoders[koder];
    template += `
    <div class="col-sm-6">
        <div class="card mb-3">
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
};

fetch("https://koder19g-ngp-default-rtdb.firebaseio.com/koders/.json")
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
    listKoders(response);
  });
