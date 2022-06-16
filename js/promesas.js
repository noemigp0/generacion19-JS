let koders = [
    {
        name: 'Emilio',
        age: 30,
        city: 'Guadalajara',
        generacion: 6,
        typeKoder: 'js',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=68'
    },
    {
        name: 'Juan',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=67'
    },
    {
        name: 'Maria',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=47'
    },
    {
        name: 'Ivonne',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=45'
    },
    {
        name: 'Alex',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=38'
    }
]

// Acciones que se ejecutan en un futuro

// Pendiente
// REsultado: completada, rechazada

const getKoders = () => {
    return new Promise( (resolve, reject) => {
        // timer
        setTimeout( () => {
            // resolve(koders)
            reject( new Error('Error al obtener los datos'))
        }, 1500)
    })
}

// let primerPromesa = new Promise( callback )
let primerPromesa = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        resolve(koders)
        //reject( new Error('Error al obtener los datos') )
    }, 5000)
})
// cuando se cumpla la promesa, realiza esto
// primerPromesa
// .then( (responsePromesa) => {
//     console.log(responsePromesa)
// })

// declaramos una promesa
let entrarAlBar = new Promise( (resuelta, incumplida ) => {
    let age = 18
    if(age >= 18 ){
        setTimeout( ()=> {
            resuelta('Puedes entrar al Bar')
        }, 3000)
    } else {
        setTimeout( ()=> {
            incumplida('No puedes pasar al bar')
        }, 3000)
    }
})

const irAlBar = () => {
    return new Promise( (resolve, reject ) => {
        let age = 19
        console.log('Verificando tu edad')
        if(age >= 18 ){
            setTimeout( () => {
                console.log('Edad verificada')

                resolve('Puedes entrar al Bar')
            }, 3000)
        } else {
            setTimeout( () => {
                reject('No puedes pasar al bar')
            }, 3000)
        }
    })
}

// irAlBar()
// .then( (response)=> {
//     console.log(response)
// })



// llamar pizzeria
const llamarPizzeria = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve('Buenas noches...')
            // reject('No contestaron en tu pizzeria')
        }, 1000 )
    }) 
}

// elegir la pizza
const elegirPizza = () =>{
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve('Pizza peperoni elegida')
        }, 2000 )
    }) 
}
// esperar pizza
const esperarPizza = () =>{
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            reject( 'No llego la pizza')

            // resolve('Esperando pizza....')

        }, 2000 )
    }) 
}

const pagarPizza = () =>{
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve('pagando pizza $$$ ....')
        }, 2000 )
    }) 
}

const disfrutarPizza = () =>{
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve('Deliciosa...')
        }, 2000 )
    }) 
}

// promise hell
// llamarPizzeria()
// .then( response => {
//     console.log(response)
//     elegirPizza()
//     .then( responsePizza => {
//         console.log(responsePizza)
//         esperarPizza()
//         .then( pizzaEntreda => {
//             console.log(pizzaEntreda)
//             pagarPizza()
//             .then( dinero => {
//                 console.log(dinero)
//                 disfrutarPizza()
//                 .then( disfruta => {
//                     console.log(disfruta)
//                 })
//             })
//         })
//     })
// })



llamarPizzeria()
.then( response => {
    console.log(response)
   return elegirPizza()
}).then( ( response ) => {
    console.log(response)
    return esperarPizza()
})
.then( response => {
    console.log(response)
    return pagarPizza()
})
.then( response => {
    console.log(response)
    return disfrutarPizza()
})
.then( response => {
    console.log(response)
})
.catch( ( error ) => {
    console.log(error)
    alert('Algo salio mal con tu pedido: ', error)
})




//ejercicio

// 1. Conocer kodemia
const conocerK = () => {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
           resolve('Investigar...') 
           //reject('no encontre información')
        }, 2000);
    })
}

// 2. Inscribirse
const inscribirK = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
           resolve('buscar beca') 
           //reject('no encontre financiamiento')
        }, 2000);
    })
}

// 3. Tomar la primera clase
const claseK = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
           //resolve('Bienvenidos koders') 
           reject('no llegue a la clase')
        }, 2000);
    })
}

conocerK()
.then((response)=>{
    console.log(response)
    return inscribirK()
})
.then((response)=> {
    console.log(response)
    return claseK()
})
.then((response)=> {
    console.log(response)

})
.catch((err)=>{
    console.log(err)
}
)











































const fetchData = async () => {
    getKoders()
    .then( (res) => {
        console.log(res)
    })
    
}

const fetchDataAsync = async () => {
    try {
        const kodersFetched = await getKoders()
        console.log(kodersFetched)
    } catch (error) {
        console.log(error)
    }
}

// fetchData()


// Generar el proceso de inscripción
// tomar como referencia 3 pasos

// Conocer kodemia
// Inscribirse
// Tomar primera clase