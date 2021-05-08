// Função construtora -> obejto; 
//função fabrica -> objeto; 
//Contrutora -> Pessoa (new); 
//new -> cria um novo objeto

function Pessoa(nome, sobrenome){
    //a tributos ou métodos públicos; 
    this.nome = nome; 
    this.sobrenome = sobrenome; 

    this.metodo = function(){
        console.log(this.nome + ':  Sou um método '); 
    }; 
}

const p1 = new Pessoa('Lucas', 'Leite'); 
const p2 = new Pessoa ('Athur', 'Oliveira'); 

p2.metodo(); 