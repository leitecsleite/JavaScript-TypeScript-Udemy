// defineProperty -> Getter e Setters

function Produto (nome, preco, estoque){
    this.nome = nome; 
    this.preco = preco;
    
    let estoquePrivado = estoque; 

    Object.defineProperty(this, 'estoque', {
        enumrable: true,  // mostra a chave
        configurable: true, 

        get: function (){
            return estoquePrivado; 
        },

        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError ('Mensagem'); 
            }

            estoquePrivado = valor; 

        }
    })
    
}

const p1 = new Produto('Camisa', 20, 3);
console.log(p1); 
p1.estoque = 10; 
console.log(p1.estoque); 