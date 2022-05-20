//Metodos string
//funsiones
//str.nombreMetodo(p1,p2,pN);
//toUpperCase()
//.toLowerCase()
//.substring(start, end)
//.includes()



//Ejemplo uno.
//

let palabra = prompt('Ingresa una palabra y te dire cuantas vocales tiene');

if (palabra === null) {
    console.log('Debes ingresar un palabra');
} else {
    let numeroVocales = palabra.match(/[aeiou]/).length + " vocales";
    alert(`La palabra ${palabra} tiene ${numeroVocales} vocales`);
  
}

    
    

