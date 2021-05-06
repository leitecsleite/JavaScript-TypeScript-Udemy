
//Parâmetros da função 

const conta = (...args) => {
    console.log(args); 
}

conta('+', 1, 20, 30, 40, 50); 

//imprimir: [ '+', 1, 20, 30, 40, 50 ]