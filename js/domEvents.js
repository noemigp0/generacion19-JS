const enviar = () => {
  console.log("enviar");
};

const calcular = () => {
  console.log("calcular");
};

//Eventos de teclado
//onkeyup

const empezando = () => {
    console.log("Empezando a presionar tecla")
}

const presionando = () => {
    console.log("presionando tecla")
}

const terminando = () => {
    console.log("terminando presionar tecla")
}

const focoEnInput = () => {
    console.log("Ahora estas en el input text")

}

//Eventos de navegador

//


const seleccionado = () => {
    console.log("sSeleccionando texto")
}

const clickDerecho = () =>{
    console.log("Presionaste clic derecho");
} 


/**
 * Ejercicio 1
 * 
    <ul id="menu" class="menu">
        <li class="item__menu">Inicio</li>
        <li class="item__menu">Products</li>
        <li class="item__menu">About Us</li>
    </ul>
    Replicar con JS este markup
 */



    const tarea1 = () => {
    
        const contenedor = document.querySelector('.ejerciciouno')
        contenedor.innerHTML = `<ul class="lista" id="lista"></ul>`
        // const lista = document.createElement('ul')
        // lista.setAttribute('id', 'lista')
        // // setear clases
        // // mediante atirbutos
        // lista.setAttribute('class', 'lista lista3')
        // // mediante metodos add/remove
        // lista.classList.add('lista2')
        // lista.classList.remove('lista2')
        // contenedor.appendChild(lista)
    
        let menus = ['Home', 'Products', 'About Us']
        
        let listItems =  ''
        menus.forEach( (menu) => {
            listItems += ` <li class="item__menu">${menu}</li>`
        })
    
        console.log(listItems)
        document.querySelector('.lista').innerHTML = listItems
    
    }