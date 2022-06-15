let btnEnviar = document.getElementById('sendKoder')

btnEnviar.addEventListener('click', () => {
    

})

const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( method, `https://koders19gjs-default-rtdb.firebaseio.com${url}`, true)
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

  
  
// Create Koder
console.log('SU codigo para crear un koder aquí')