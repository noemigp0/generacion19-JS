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
const usersRequest = new XMLHttpRequest();// Formar request . 
console.log("estado",usersRequest.readyState);
//send request
usersRequest.open("GET", "https://jsonplaceholder.typicode.com/users", false) //enviar request
console.log("estado",usersRequest.readyState)
usersRequest.send()
console.log("estado",usersRequest.readyState)
console.log(usersRequest)


