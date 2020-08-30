var quienesAprobaron = [[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]];


function aprobados(arrays){
    console.log(
        arrays.filter(array => array.every(i => i>=4)));
}

aprobados(quienesAprobaron);

//var resultado = quienesAprobaron.filter(i => i>=4);


//console.log(resultado);
//console.log(quienesAprobaron.filter(i => i>=4));