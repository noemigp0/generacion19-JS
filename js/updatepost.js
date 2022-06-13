
let idPost = window.location.search.substring(8)
document.addEventListener('DOMContentLoaded', () => {
    //obtener id de post
    console.log(idPost);

    if (idPost !== ''){
        ajaxXHR(loadPost, `/posts/${idPost}.json`, 'GET')
    }

    //obtener el post
    

})

// const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {
//     const xhttp = new XMLHttpRequest()
//     xhttp.open( 
//         method,  
//         `https://koders19gjs-default-rtdb.firebaseio.com${url}`, 
//         true
//     )
//     xhttp.onload = function(data) {
//         if(data.target.status >= 200 && data.target.status <= 399){
//             let response = JSON.parse(data.target.response)
//             callback(response)
//         }
//     }
//     if(method === 'GET' || method === 'DELETE'){
//         xhttp.send()
//     } else {
//         xhttp.send( JSON.stringify(obj) )
//     }
//   }

const loadPost = (objPost) => {
    console.log(objPost);

    document.getElementById('#title').value = objPost.title
    document.getElementById('#content').value = objPost.body
    document.getElementById('#date').value = objPost.date

}


const postUpdated = (post) => {
    console.log('post actualizado')
    console.log(post)
}


let btnUpdate = document.querySelector('#editar')
let titulo = document.querySelector('#title').value.trim()
let contenido = document.querySelector('#content').value.trim()
let fecha = document.querySelector('#date').value.trim()



btnUpdate.addEventListener('click', function() {
   

if (titulo !== '' && contenido !== '' && fecha !== ''){
    
    let newPost = {
        body: contenido,
        title: titulo,
        date: fecha
    }
    ajaxXHR(postUpdated, `/posts/${idPost}.json`, 'PATCH', newPost)
    alert('Post actualizado, favor de actualizar', 'success')
} else {
    alert('Debe llenar todos los campos', 'danger')
}
    
})



