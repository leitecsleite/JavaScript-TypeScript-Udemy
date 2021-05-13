/*
Object.assign (des, any)
*/

const produto = {nome: 'Produto', preco: 1.8}; 
const caneca =  Object.assign({}, produto, {material: 'Porcelana'}); 


caneca.nome = 'copo'; 
console.log(produto);
console.log(caneca) 