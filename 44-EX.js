


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]; 


const numeroPar = numeros.filter(n =>  {
   const resto = 0; 
    let par =  n%2; 
    return resto === par; 
})

console.log(numeroPar); 