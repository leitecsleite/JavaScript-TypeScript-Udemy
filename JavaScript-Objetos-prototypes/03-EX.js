

//Objetos podem conter métodos 

const pessoa1 = new Object(); 
pessoa1.nome = 'Lucas'; 
pessoa1.sobrenome = 'Leite';
pessoa1.idade = 27;  
pessoa1.falarNome = function(){
  console.log(`${this.nome} está falando seu nome`); 
}; 

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date(); 
    return dataAtual.getFullYear() - this.idade; 
}

console.log(pessoa1.getDataNascimento()); 

//impirmir: 1994; 