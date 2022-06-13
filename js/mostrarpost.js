let idPost = window.location.search.substring(8)


document.addEventListener('DOMContentLoaded', () => {
    //obtener id de post
    console.log(idPost);

    if (idPost !== ''){
        ajaxXHR(loadPost, `/posts/${idPost}.json`, 'GET')
    }
    //obtener el post 
})


const loadPost = (objPost) => {
    console.log(objPost);
    console.log(document.querySelector('#title'))
    document.getElementById('title').innerHTML = objPost.title
    document.getElementById('body').innerHTML = objPost.body
    document.getElementById('date').innerHTML = objPost.date
}


//let btnActualizar = document.querySelector('#update__post')
let cargarPost = document.querySelector('#mostrar__post')
cargarPost.addEventListener('DOMContentLoaded',  () => {
    
    let title = document.querySelector('#title').value
    let body = document.querySelector('#body').value
    let date = document.querySelector('#date').value

    if( title !== '' && body !== '' && date !== '' ){

        // let newPost = {
        //     title: title,
        //     body: body,
        //     date: date
        // }
        ajaxXHR(postActualizado, `/posts/${idPost}.json`, 'GET')
    } 
})


let deletePost = document.querySelector("#borrar")
console.log(deletePost)

deletePost.addEventListener('click', (event) => {
  console.log(event)
  //obtener id de post
  console.log(idPost);

  // if (idPost !== ''){
      
      ajaxXHR(redirectHome , `/posts/${idPost}.json`, 'DELETE')
  // }

  //obtener el post
  

})

const redirectHome = () => {
    window.location.pathname = "/createuser.html"
}
