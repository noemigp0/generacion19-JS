/*
Holds the status of the XMLHttpRequest
0: request no initialized
1: server connection established
2: request received
3: procesing request
4: request finished and response is ready



*/
// Formar request .
// enviar request
// esperar respuesta
// response

//Create an XML object, se crea esta instancia para poder hacer un request
const primerPeticion = new XMLHttpRequest();
// console.log(primerPeticion)

let users = [];

const printUsers = (arrObjs) => {
  let template = arrObjs.reduce((acc, post) => {
    return (acc += `     
  <div class="col">
    <div class="card">
    <img alt="imagen aleatoria" src="https://via.placeholder.com/300x150">
      <div class="card-body">
        <h5 class="card-title">${post.id} : ${post.title}</h5>
        <p class="card-text">${post.body}</p>
      </div>
    </div>
  </div>
          `);
  }, "");

  document.querySelector("#card-group").innerHTML = template;
};

//Define callback function, que hacer cuando la respuesta este lista
primerPeticion.onload = (data) => {
  //Here you can use the Data
  // console.log(data);
  if (data.target.status >= 200 && data.target.status <= 299) {
    // console.log(data);
    // console.log(data.target)

    //la data viene en forma de string, para poder procesarla necesitamos convertir a JSON
    let responseJSON = JSON.parse(data.target.responseText);
    console.log(responseJSON);

    users = responseJSON;
    console.log(users);
    printUsers(users);

    // console.log(typeof(data.target.response));
  }
};

//send request
primerPeticion.open("GET", "https://jsonplaceholder.typicode.com/posts", false);
primerPeticion.send();
