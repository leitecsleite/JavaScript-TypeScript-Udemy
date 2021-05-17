// definedProperty - defineProperties 

function Produto(nome, produto, estoque){
     this.nome = nome; 
     this.produto = produto; 

     Object.defineProperty(this, 'estoque', {
         enumerable: true, // mostra a chave
         value: estoque,
         //o valor do objeto não pode ser alterado; false.   
         writable: false, 
         configurable: true // configurável; 
     }); 
}

const p1 = new Produto('Camiseta', 20 , 3); 
//Object.keys informa as chaves dos objetos; 
console.log(Object.keys(p1)); 
console.log(p1); 