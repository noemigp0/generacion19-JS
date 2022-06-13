
//Consultando posts
const postRequest = new XMLHttpRequest();
// console.log(primerPeticion)

let postsArray = [];
//Define callback function, que hacer cuando la respuesta este lista
postRequest.onload = (data) => { //el onload sirve para indicar que todo esta listo
    //console.log(data);
  if (data.target.status >= 200 && data.target.status <= 299) {
   
    let responseJSON = JSON.parse(data.target.responseText);
    //console.log(responseJSON);
    postsArray = responseJSON  
  }
};

//send request
postRequest.open("GET", "https://jsonplaceholder.typicode.com/posts", false);
postRequest.send();



const createPost = (objUser) => {

    //console.log(objUser);
    
    //creando instancia del objeto HTTPRequest
    const xhttp = new XMLHttpRequest()
    
    //abrir conexion co la b.d
    xhttp.open("POST", "https://koder19g-ngp-default-rtdb.firebaseio.com/posts/.json", true)//el true significa que es sincrono
    //cuando se termina de ejecutar la informacion se regresa el response
    xhttp.onload = function(data){
        //console.log(data);
        if (data.target.status >= 200 && data.target.status <= 399 ){
            console.log(data.target.response)
        }
    }
    //
    xhttp.send(JSON.stringify(objUser))

}
//Recorriendo json e insertando en firebase
const insertPost = ( posts ) => {
    posts.forEach((cv, index, array) => {
    createPost(cv);
})

}

//llamando a funsion que insertara datos
//insertPost(postsArray)

//Insertando post a firebase

const postFBRequest = new XMLHttpRequest();
// console.log(primerPeticion)

let postsFBArray = [];
//Define callback function, que hacer cuando la respuesta este lista
postRequest.onload = (data) => { 
    console.log(data);
  if (data.target.status >= 200 && data.target.status <= 299) {
   
    let responseJSON = JSON.parse(data.target.responseText);
    //console.log(responseJSON);
    postsFBArray = responseJSON  
  }
};

//send request
postRequest.open("GET", "https://koder19g-ngp-default-rtdb.firebaseio.com/posts/.json", false);
postRequest.send();
console.log(postsFBArray)

let idPost = window.location.search.substring(8)
let postsAccumulator = ``
for( post in postsFBArray) {   
    postsAccumulator += `    
    <div class="col">
    <div class="card border-info" id="${post}" >
    <div class="card-header">${postsFBArray[post].title}</div>      
      <div class="card-body" id="data">      
      <p class="card-text">${postsFBArray[post].body}</p> 
      <a href="updatePost.html?idPost=${post}" class="link-primary">Editar</a>
      <a href="mostrarpost.html?idPost=${post}" class="link-dark">Ver post</a>
      <button  id="borrar" data-src=${post} class="btn btn-danger">Borrar</button>     
      </div>
    </div>
  </div>
    `
}

document.querySelector('#card_container').innerHTML = postsAccumulator


//guardando un elemento

let btnSave = document.querySelector('#guardar')
let titulo = document.querySelector('#titulo').value.trim()
let contenido = document.querySelector('#contenido').value.trim()
let fecha = document.querySelector('#fecha').value.trim()



btnSave.addEventListener('click', function() {
    console.log("titulo", titulo.value);
    console.log("contenido", contenido.value);
    console.log("fecha", fecha.value);

if (titulo !== '' && contenido !== '' && fecha !== ''){
    
    let newPost = {
        body: contenido,
        title: titulo,
        date: fecha
    }
    createPost(newPost)
    alert('Post registrado, favor de actualizar', 'success')
} else {
    alert('Debe llenar todos los campos', 'danger')
    
}

    
   

} )




const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)
  }






  ////Metodo para cualquier tipo de funsion de jorge

 