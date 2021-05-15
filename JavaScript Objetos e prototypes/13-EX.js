
/**
 Definição de protótipo
 Protótipo é o termo usado para se referir ao que foi criado pela primeira 
 vez, servindo de modelo ou molde para futuras produções.

 Todas os objetos tem umas referência interna para um protótipo (_proto_)
 que vem do propriedade prototype da função construtora que foi usada para 
 criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
 do js vai tentar encontrar esse membro do próprio objeto e depois a cadeia
 de protótipos é usada até o topo(null) até encontrar (ou não ) tal membro. 
 */


 function Pessoa(nome, sobrenome){
     this.nome = nome; 
     this.sobrenome = sobrenome; 
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; 
 }

 //Pessoa.prototype === pessoa1._Photo_

 Pessoa.prototype.nomeCompleto = function(){
     return this.nome = ' ' + this.sobrenome; 
 }; 

 const pessoa1 = new Pessoa ('Luiz', 'O'); 
 const pessoa2 = new Pessoa('Maria', 'A'); 
 const data = new Date();
 
 console.log(pessoa1)