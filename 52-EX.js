//numeros pares 
//dobrar o valor 
// reduzir ( somar tudo)

const numeros = [5,50,80,1, 2, 3, 5, 8, 7, 11, 15, 22, 27]; 

const numerosPares = numeros.filter(valor => {
    return valor % 2 === 0; 
}).map(valor =>{
    return valor * 2; 
}).reduce((acumulador, valor) => {
    return acumulador += valor; 
}, 0); 
// [50, 80, 2, 8, 22] pares
// [100, 160, 4, 16, 44]
// 324;
console.log(numerosPares); 