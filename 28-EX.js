// return
//Retorna um valor
// Termina a função

function criaMultiplica(multiplicador){
    //multiplicador
    return function(n){
        return n * multiplicador; 
    }; 
}

const duplica = criaMultiplica(2); 
const triplica = criaMultiplica(3); 
const quadriplica = criaMultiplica(4); 

console.log(duplica(2)); 
console.log(triplica(2)); 
console.log(quadriplica(2)); 

//imprimir: 4 6 8 