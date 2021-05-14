

//Object.getOwnPropertyDescriptor -> vai retorna as propriedades 
// { writable, configurable, value}

const produto = {nome: 'Produto', preco: 1.8}; 
Object.defineProperty(produto, 'nome', {
    writable: false, 
    configurable: false
}); 

console.log(Object.getOwnPropertyDescriptors(produto, 'nome')); 
console.log(produto); 