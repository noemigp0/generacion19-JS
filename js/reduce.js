//reduce un Rarray a una minima expresion

let numeros = [1,2,3,4,5,6,7,8,9]
let acumulador = 0;

numeros.forEach( (numero) => {
    acumulador +=  numero
})

console.log( acumulador );




let arrNumeros = [1,2,3];

//acc -> acumulador
//cv -> current value
//index --> index
//arr --> arreglo

let total = arrNumeros.reduce( (acc, cv, index, arr) => {
    console.log( index, acc, cv )
    return acc + cv
}, 0) //el 10 es el numero en el que inicializa<ra mi acumulador 

console.log(total);


//Arreglo de nombres
//Hacer una funsion que regrese un arreglo
//Al final lo va a reducir a las iniciales

let equipoTres = ['Lorena', 'Paco', 'Benjamin', 'Noemi'];

const getInitialLetters = nombres => {
    return nombres.reduce( (acc, nombre, index, arr) => {        
        return acc + nombre.charAt(0)
    }, '')
}


console.log(getInitialLetters(equipoTres));


//funsion en una sola linea
const getInitialLettersSmall = arr => arr.reduce((acc,cv) => acc += cv.charAt(0),'')

console.log( getInitialLettersSmall(equipoTres));



let arr = [4,7,9]
const getDoubleNumbers = (arr) => {
    let doubleNumbersArr = []

    doubleNumbersArr = arr.reduce( (acc, elemento, index) => {
        acc.push(elemento * 2)
            return acc
           
    }, [] )

    return doubleNumbersArr;
}


console.log(getDoubleNumbers(arr));


/*
getAverage()


*/ 

let arregloNumeros = [1,2,3,4];
const getAverage = (arr) => {
    return  arr.reduce( (acc, cv)  => {
        return acc + cv
    }, 0) / arr.length
}
   

console.log(getAverage(arregloNumeros));
