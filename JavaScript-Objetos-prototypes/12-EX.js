


const produto = {nome: 'Produto', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false, // não posso alterar o valor da chave; 
    configurable: false
}); 

//console.log()