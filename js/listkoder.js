
const xhttp = new XMLHttpRequest();
  xhttp.open('GET', `https://koders19gjs-default-rtdb.firebaseio.com/koders/.json`, true );
  xhttp.onload = function (data) {
    if (data.target.status >= 200 && data.target.status <= 399) {
      //console.log(data.target.response)//el servidor me da la respuesta en texto plano
      let koders = JSON.parse(data.target.response);//se transforma a un objeto de objetos
      //console.log(response);
      console.log('Formar el layout')
      
      let template = ''
      for (key in koders ){
        // console.log(key)//key es la llave del koder
        // let llave = key
        let { name, age, biography, bootcamp } = koders[key] //destructuracion de datos
       //let infoKoder = koders[key]
        template += `
        <div class="col-12 col-sm-6">
         <div class="card">
           <div class="card-body">        
        <h5 class="card-title">${name} ${age} años</h5>
             <p class="card-text">${biography.slice(0,20)}...</p>
             <p class="card-text">${bootcamp}</p>
             <a href="/interior.html?koderKey=${key}" class="btn btn-primary">Actualizar</a>
           </div>
         </div>
        </div>
        `
      }
      document.querySelector('.all__posts').innerHTML = template
    }
  };
  
    xhttp.send();

  