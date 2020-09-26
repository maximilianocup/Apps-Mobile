var cuantosCumplen = [7,9,25,42];

//var par = i => i % 2 ===0;

function par(num){
    return num %2 === 0
}

function cumplen(cond,array){
    var arr = array.filter(num => cond(num))
    return arr.length
}

console.log(cumplen(par,(cuantosCumplen)));

//console.log(cuantosCumplen.filter(i => i %2 ===0));