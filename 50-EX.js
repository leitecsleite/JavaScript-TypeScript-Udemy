//Soma todos os números (reduce )


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce((acumulador, valor, index, array) => {
      acumulador += valor; 
      return acumulador; 
}, 0); 

console.log(total); 

//imprimir: 236; 