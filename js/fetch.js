let objKoder = {
    name: 'Noemi',
    bootcamp: 'js'
}

let newKoder = {
    age: "28",
    biography: "Lorem ipsum",
    bootcamp: "Js",
    name: "Fetch"
}

//Estrcutura de fetch con POST
fetch ('https://koder19g-ngp-default-rtdb.firebaseio.com/koders/.json', {
    method: 'POST',
    body: JSON.stringify(newKoder),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then(response => {
    return response.json()
}).then(finalResponse => {
    console.log(finalResponse);
}).catch( err => {
    console.log(err)
})