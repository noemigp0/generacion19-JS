/*
Estar en la rama de la clase
En el archivo weather.js
Pedir al usuario que ingrese como esta el clima en su ciudad
4. Opciones
a.Sole




*/


let clima = prompt('¿Como esta el día en tu ciudad? Opciones: a. Soleado, b.Lluvioso, c.Nevando, d.Nublado').toLocaleLowerCase();

//Pedir al usuario los grados celcius en su locaLidad
let celsius = parseInt(prompt('Ingrese la temperatura aproximada en °C'));
//convertir centius to farenheit

//Celsius a farenheit
//Celsius * 9/5 + 32

if ( celsius === null || clima === null ) {
     console.log('Debe ingresar ambos valores');
 } else {
    let farenheit = celsius * 9/5 + 32;
    console.log(`Los grados farenheit son ${farenheit}`);


    switch (clima) {
        case 'soleado': 
            window.alert(`En ti ciudad el día esta ${clima} con una temperatura de ${farenheit}°F`);                 
            break;
        case 'lluvioso': 
            window.alert(`En ti ciudad el día esta ${clima} con una temperatura de ${farenheit}°F`);         
            break;
        case 'nublado':
            window.alert(`En ti ciudad el día esta ${clima} con una temperatura de ${farenheit}°F`);             
            break;
        case 'nevando':
            window.alert(`En ti ciudad el día esta ${clima} con una temperatura de ${farenheit}°F`);            
            break;
        default:
            window.alert(` ${clima} Nos diponible y estas a ${farenheit}°F`);  
            break;
    }
 }

