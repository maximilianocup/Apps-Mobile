var rechazar = [7,9,87,42];

function impar(num){
    return num %2 === 1
}

function rech(cond,array){
    var arr = array.filter(num => cond(num))
    return arr
}

console.log(rech(impar,(rechazar)))



//console.log(rechazar.filter(i => i % 2 === 1));