//ciclos

/**
 * fot(inicio; fin; aumento/decrementi)
 * 
 * */ 

// for(let i = 1; i <= 10; i++){
//     //console.log(`5 x ${i} = ${5*i}`);
// }

// let str = 'Hola Koders';
// let fin = str.length -1; //si ponemos el ciclo con length esto cuenta cantidad, no es lo mismo que indices 

// for(let i = 0; i <= fin; i++){
//     //console.log(str[i]);
// }


// // "Hola koder"
// //Imprimir cada una de las vocales
// //ciclos y condicionales

// let str2 = 'Hola koder';
// let size = str2.length -1;

// for ( i = 0; i <= size ; i++ ){
    
//     if( str2[i] === 'a' || str2[i] == 'e' || str2[i] == 'i' || str2[i] == 'o' || str2[i] == 'u'){
//         //console.log(str2[i]);
//     }
   
// }

// // "Hola koder"
// //Imprimir cada una de las consonantes
// //ciclos y condicionales

// for ( i = 0; i <= size ; i++ ){
    
//     if( str2[i] !== 'a' && str2[i] !== 'e' && str2[i] !== 'i' && str2[i] !== 'o' && str2[i] !== 'u'){
//        // console.log(str2[i]);
//     }
   
// }

// for ( i = 0; i <= size ; i++ ){
    
//     if( !(str2[i] === 'a' || str2[i] == 'e' || str2[i] == 'i' || str2[i] == 'o' || str2[i] == 'u')){
//         console.log(str2[i]);
//     }
   
// }


// let counter = 1;
// while( counter <= 10 ) {
//     //console.log(counter);

//     console.log(` 5 x ${counter} = ${ 5 * counter}`);
//     counter++;//es lo mismo que counter = counter +1
// }



// let str = 'Hola koder'
// let fin = str.length;

// for(let i = 0; i < fin; i++){
//     console.log(str[i]);
// }

// imprimir cada palabra de un string -> pasar a while
// let contador = 0;
// let cadena = 'Hola koder';
// let size = cadena.length -1;
// while(contador <= size){
//     console.log(cadena[contador]);
//     contador++;
// }



/**
 * 'Hola Koder'
 * -> 'redok aloh'
 * Imprimir el string invertido
 * 
 * 
 */ 


 let contador = 0;
 let cadena = 'Hola Koder';
 
 let len = cadena.length -1;
 while(contador <= len){
     console.log(cadena[len - contador]);
     contador++;
 }
 


/**
 * 'oaoe'
 * Imprimir en consola cada una de las vocales
 * 
 */ 
 let count = 0;
 let cadena2 = 'Hola koder';
 let size = cadena2.length -1;
 while(count <= size){
     if( cadena2[count] === 'a' || cadena2[count] === 'e' || cadena2[count] === 'i' || cadena2[count] === 'o' || cadena2[count] === 'u'  ){
     console.log(cadena2[count]);
     }
     count++;
 
    }
/**
 * 'HlKdr'
 * Imprimir en consola cada una de las consonantes
 * 
 */ 


 count = 0;
 cadena2 = 'Hola koder';
 size = cadena2.length -1;

 while(count <= size){
     if( !(
        cadena2[count] === 'a' 
     || cadena2[count] === 'e' 
     || cadena2[count] === 'i' 
     || cadena2[count] === 'o' 
     || cadena2[count] === 'u')  
     ){        
        console.log(cadena2[count]);
     }
    count++;
 
}




//do while

