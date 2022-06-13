
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
//JSON.parse( texto ) --> obj
//JSON.sstringify (obj) -> texto



//CRUD
//Create  POST
//Red GET
//Update PUT
//Delete DELETE
const createUser = (objUser) => {
    console.log(objUser);    
    //creando instancia del objeto HTTPRequest
    const xhttp = new XMLHttpRequest()    
    //abrir conexion co la b.d
    xhttp.open("POST", "https://koder19g-ngp-default-rtdb.firebaseio.com/users/.json", true)//el true significa que es sincrono
    //cuando se termina de ejecutar la informacion se regresa el response
    xhttp.onload = function(data){
        console.log(data);
        if (data.target.status >= 200 && data.target.status <= 399 ){
            console.log(data.target.response)
        }
    }    

    console.log(JSON.stringify(objUser))
    xhttp.send(JSON.stringify(objUser))
}

//createUser(userPATCH)
let userPATCH = {
    age: 28,
    lastName: "Usuario",
    name: "Nuevo"
  }

const updateUser = ( userUpdated ) => {
    const updatexhr = new XMLHttpRequest()
    updatexhr.open('PATCH', `https://koder19g-ngp-default-rtdb.firebaseio.com/users/N4ASdvVe6GHUOi-Hu9G.json`, true)
    updatexhr.onload = (response) => {
        if (response.target.status >= 200 && response.target.status <= 399){
            console.log(response.target)
            console.log(response.target.response)
        }
    }
 updatexhr.send(JSON.stringify(userUpdated))


} 


//updateUser(userPATCH)

//PUT


const updateUserPUT = ( userUpdated ) => {
    const updatexhr = new XMLHttpRequest()
    updatexhr.open('PUT', 'https://koder19g-ngp-default-rtdb.firebaseio.com/users/N4ASdvVe6GHUOi-Hu9G.json', true)
    updatexhr.onload = (response) => {
        if (response.target.status >= 200 && response.target.status <= 399){
            console.log(response.target)
            console.log(response.target.response)
        }
    }
 updatexhr.send(JSON.stringify(userUpdated))


} 


let userPUT = {
    age: 28,
    lastName: "Cruz Martinez",
    name: "Seleste"
  }
//updateUserPUT(userPUT)
//createUser(user)

//Para acceder a un dato con id
 //https://koder19g-default-rtdb.firebaseio.com/users/aqui iria el parametro del hash/.json

 const deleteUser = ( userId, userUpdated ) => {
    const updatexhr = new XMLHttpRequest()
    updatexhr.open('DELETE', `https://koder19g-ngp-default-rtdb.firebaseio.com/${userId}.json`, true)
    updatexhr.onload = (response) => {
        if (response.target.status >= 200 && response.target.status <= 399){
            console.log(response.target)
            console.log(response.target.response)
        }
    }
 updatexhr.send()//par ELIMINARs solo apunto al recurso en la url


} 

//deleteUser()

const deleteUserJorge  = ( idUser ) => {
    const deletexhr = new XMLHttpRequest()
    deletexhr.open(
      'DELETE', 
      `https://koders19gjs-default-rtdb.firebaseio.com/users/${idUser}.json`, 
      true
    )
    deletexhr.onload = (response) => {
      if(response.target.status >= 200 && response.target.status <= 399){
        console.log(response.target)
        console.log(response.target.response)
      }
    }
    deletexhr.send()
  }
  
  // deleteUserJorge( '-N4AHUkoGKfN92ubsFJ_') 
  const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( 
        method,  
        `https://koder19g-ngp-default-rtdb.firebaseio.com/${url}`, 
        true
    )
    xhttp.onload = function(data) {
        if(data.target.status >= 200 && data.target.status <= 399){
            let response = JSON.parse(data.target.response)
            callback(response)
        }
    }
    if(method === 'GET' || method === 'DELETE'){
        xhttp.send()
    } else {
        xhttp.send( JSON.stringify(obj) )
    }
  }
