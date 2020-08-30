var cuantosCumplen = [7,9,25,42];

//var par = i => i % 2 ===0;

function cumplen(array){
    console.log(array.filter(i => i %2 ===0))
}

cumplen(cuantosCumplen);

//console.log(cuantosCumplen.filter(i => i %2 ===0));