//Object.keys -> mostra as chaves ; 
//Object.freezer -> não têm como alterar o objeto; 


const produto = {nome: 'Produto', preco: 1.8};
Object.freezer(produto); // não tem como alterar esse objeto; 
const caneca = {nome: produto.nome, preco: produto.preco };
console.log(Object.keys(produto)); 