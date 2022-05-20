//ciclos

/**
 * fot(inicio; fin; aumento/decrementi)
 * 
 * */ 

for(let i = 1; i <= 10; i++){
    //console.log(`5 x ${i} = ${5*i}`);
}

let str = 'Hola Koders';
let fin = str.length -1; //si ponemos el ciclo con length esto cuenta cantidad, no es lo mismo que indices 

for(let i = 0; i <= fin; i++){
    //console.log(str[i]);
}


// "Hola koder"
//Imprimir cada una de las vocales
//ciclos y condicionales

let str2 = 'Hola koder';
let size = str2.length -1;

for ( i = 0; i <= size ; i++ ){
    
    if( str2[i] === 'a' || str2[i] == 'e' || str2[i] == 'i' || str2[i] == 'o' || str2[i] == 'u'){
        //console.log(str2[i]);
    }
   
}

// "Hola koder"
//Imprimir cada una de las consonantes
//ciclos y condicionales

for ( i = 0; i <= size ; i++ ){
    
    if( str2[i] !== 'a' && str2[i] !== 'e' && str2[i] !== 'i' && str2[i] !== 'o' && str2[i] !== 'u'){
       // console.log(str2[i]);
    }
   
}

for ( i = 0; i <= size ; i++ ){
    
    if( !(str2[i] === 'a' || str2[i] == 'e' || str2[i] == 'i' || str2[i] == 'o' || str2[i] == 'u')){
        console.log(str2[i]);
    }
   
}