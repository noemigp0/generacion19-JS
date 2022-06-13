let koders = [
  {      
    "name": "Leanne Graham",
    "age": 30,
    "bootcamp": "js",
    "biography": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit libero. Numquam, ratione vel minus dignissimos qui consequatur sint reiciendis provident ipsum eveniet! Accusantium, totam? Voluptas mollitia culpa illum assumenda!"
  },
  {      
    "name": "Ervin Howell",
    "age": 29,
    "bootcamp": "js",
    "biography": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit libero. Numquam, ratione vel minus dignissimos qui consequatur sint reiciendis provident ipsum eveniet! Accusantium, totam? Voluptas mollitia culpa illum assumenda!"
  },
  {      
    "name": "Clementine Bauch",
    "age": 29,
    "bootcamp": "js",
    "biography": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit libero. Numquam, ratione vel minus dignissimos qui consequatur sint reiciendis provident ipsum eveniet! Accusantium, totam? Voluptas mollitia culpa illum assumenda!"
  },
  {     
    "name": "Patricia Lebsack",
    "age": 28,
    "bootcamp": "js",
    "biography": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit libero. Numquam, ratione vel minus dignissimos qui consequatur sint reiciendis provident ipsum eveniet! Accusantium, totam? Voluptas mollitia culpa illum assumenda!"
  },
  {     
    "name": "Chelsey Dietrich",
    "age": 27,
    "bootcamp": "js",
    "biography": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit libero. Numquam, ratione vel minus dignissimos qui consequatur sint reiciendis provident ipsum eveniet! Accusantium, totam? Voluptas mollitia culpa illum assumenda!"
  },
  {      
    "name": "Mrs. Dennis Schulist",
    "age": 26,
    "bootcamp": "js",
    "biography": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit libero. Numquam, ratione vel minus dignissimos qui consequatur sint reiciendis provident ipsum eveniet! Accusantium, totam? Voluptas mollitia culpa illum assumenda!"
  },
  {      
    "name": "Kurtis Weissnat",
    "age": 25,
    "bootcamp": "js",
    "biography": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit libero. Numquam, ratione vel minus dignissimos qui consequatur sint reiciendis provident ipsum eveniet! Accusantium, totam? Voluptas mollitia culpa illum assumenda!"
  },
  {     
    "name": "Nicholas Runolfsdottir V",
    "age": 24,
    "bootcamp": "js",
    "biography": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit libero. Numquam, ratione vel minus dignissimos qui consequatur sint reiciendis provident ipsum eveniet! Accusantium, totam? Voluptas mollitia culpa illum assumenda!"
  },
  {      
    "name": "Glenna Reichert",
    "age": 23,
    "bootcamp": "js",
    "biography": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit libero. Numquam, ratione vel minus dignissimos qui consequatur sint reiciendis provident ipsum eveniet! Accusantium, totam? Voluptas mollitia culpa illum assumenda!"
  },
  {     
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "age": 30,
    "bootcamp": "js",
    "biography": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit libero. Numquam, ratione vel minus dignissimos qui consequatur sint reiciendis provident ipsum eveniet! Accusantium, totam? Voluptas mollitia culpa illum assumenda!"
  }
]


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


const insertAllKodersInfo = ( kodersArray ) => {
  kodersArray.forEach(koder => {    
    ajaxXHR(`/koders/.json`, 'POST', koder)
    
  }); 

}

//insertAllKodersInfo(koders)