
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

//Formar request 
const commentsRequest = new XMLHttpRequest();

//send request


let commentsArray = []


const printCommnets = ( commentsObj ) => {
    let template = commentsObj.reduce((acc, cv, index, array) => {
        console.log(acc);
       return ( acc += `
        <div class="col">
        <div class="card">
        <div class="card-header">Header</div>
        <div class="card-body text-dark">
          <h5 class="card-title">${cv.id} ${cv.name}</h5>
          <p class="card-text">${cv.emmail}, ${cv.body}</p>
        </div>
        </div>
      </div>  
        `)
    }, '')
    document.querySelector("#card-group").innerHTML = template;
}
//esperar respuesta
commentsRequest.onload = (data) => {   
       
    if (data.target.status >= 200 && data.target.status <= 299) {       
      let responseJSON = JSON.parse(data.target.responseText);     
  
      commentsArray = responseJSON;

      printCommnets(commentsArray);
     
    }
  };

commentsRequest.open("GET", "https://jsonplaceholder.typicode.com/comments", false);
commentsRequest.send();