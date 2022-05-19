//Pedir al usuario los grados celcius en su locaLidad
let celsius = prompt('Ingrese los grados celcius en tu localidad');
//convertir centius to farenheit
let celciusToInt = parseInt(celsius);
console.log(typeof(celciusToInt));
//Celsius a farenheit
//Celsius * 9/5 + 32

if (celsius === null) {
     console.log('Ingrese un valor');
 } else {
    let farenheit = celciusToInt * 9/5 + 32;
    console.log(`Los grados farenheit son ${farenheit}`);
    window.alert(`Los grados farenheit son ${farenheit}`);
 }
