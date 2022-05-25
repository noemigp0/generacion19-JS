let newArray = [1,2,3, 'str', [1,2]];
// console.log(newArray);

// console.log( newArray[0] );
// console.log( newArray[1] );
// console.log( newArray[4][1] );

for (i = 0; i <= newArray.length; i++){
    console.log(i);
}


let arrayToReverse = [1,2,3];
let arrayReversed = [];

for( i = arrayToReverse.length -1; i>=0; i--){
    arrayReversed.push(arrayToReverse[i])
}

console.log(arrayReversed);


// .push() --> agrega nuevo item al array
// .pop() --> Elimina nuevo item al array