 

 function Produto(nome, preco, estoque){

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave; 
        value: estoque,  //valor
        writable: true,  // pode alterar o objeto; 
        configurable: true, // configurável;  
    })

    
     Object.defineProperties(this,{
         nome:{
             enumerable: true, 
             value: nome,
             writable: true,
             configurable: true, 
         }, 
         preco: {
             enumerable: true,//mostrar a chave; 
             value: preco, // valor
             writable: true, // pode alterar o valor;
             configurable: true, // configurável;   
         }

     }); 
 }

 const p1 = new Produto('Camiseta', 20, 3);
 console.log(Object.keys(p1));

 for (let chave in p1){
     console.log(chave); 
 }