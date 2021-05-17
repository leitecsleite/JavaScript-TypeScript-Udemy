/*
Object.assign (des, any)
*/

const produto = {nome: 'Produto', preco: 1.8}; 
const caneca =  Object.assign({}, produto, {material: 'Porcelana'}); 


caneca.nome = 'copo'; 
console.log(produto);
console.log(caneca)



//Imprimir: { nome: 'Produto', preco: 1.8 }
//{ nome: 'copo', preco: 1.8, material: 'Porcelana' }