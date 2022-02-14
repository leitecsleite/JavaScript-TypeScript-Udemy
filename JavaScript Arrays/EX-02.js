const numeros = []; 

for(let i = 0;  i <=10; i++ ){
    const obj = {i}

    numeros.push(obj);
}

console.log(numeros)


numeros.map(numero => {
    console.log(numero)
})

