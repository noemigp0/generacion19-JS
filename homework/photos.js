
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
const photosRequest = new XMLHttpRequest();

//send request

const printPhotos = ( photosObj ) => {
    let template = photosObj.reduce((acc, cv, index, array) => {
        console.log(acc);
       return ( acc += `
       <div class="col">
       <div class="card">
         <img src="${cv.url}" class="card-img-top" >
         <div class="card-body">
           <h5 class="card-title">${cv.title}</h5>
           <p class="card-text">id: ${cv.id} AlbumId: ${cv.albumId}</p>
         </div>
       </div>
     </div>
        `)
    }, '')
    document.querySelector("#card-group").innerHTML = template;
}
//esperar respuesta
let photosArray = []
photosRequest.onload = (data) => {   
       
    if (data.target.status >= 200 && data.target.status <= 299) {       
      let responseJSON = JSON.parse(data.target.responseText);     
  
      photosArray = responseJSON;

      printPhotos(photosArray);
     
    }
  };

  photosRequest.open("GET", "https://jsonplaceholder.typicode.com/photos", false);
  photosRequest.send();