const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Miranda',
    idade: 30, 
    endereco: {
        rua: 'av Brasil',
        numero: 320
    }
}; 

// Atribuição via destruturação
const { endereco: { rua, numero}} = pessoa; 
console.log( rua, numero); 


