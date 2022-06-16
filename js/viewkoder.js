// url
// http://127.0.0.1:5500/interior.html?koderkey=-N4TJNibKM9OvZbWSB_R

// window.location.search
// "?koderkey=-N4TJNibKM9OvZbWSB_R"
//

let idKoder = window.location.search.substring(10);
console.log(idKoder);

fetch(`https://koder19g-ngp-default-rtdb.firebaseio.com/koders/${idKoder}.json`)
  .then((response) => {
    console.log(response);
    if (response.status === 200) {
      return response.json();
    } else {
      `Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`;
    }
  })
  .then((response) => {
    let { name, age, biography, bootcamp } = response;

    let template = `
                <div class="col-12 col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name} ${age} años</h5>
                    <p class="card-text">${biography}</p>
                    <p class="card-text">${bootcamp}</p>
                    <a href="/index.html" class="btn btn-link">Ver todos los koders</a>
                </div>
                </div>
            </div>
        `;
    document.querySelector(".wrap__koder").innerHTML = template;
  });
