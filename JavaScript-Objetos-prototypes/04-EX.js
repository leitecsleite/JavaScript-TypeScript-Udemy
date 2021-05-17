// Factory functions / Constructor functions / Classes 


function Pessoa(nome, sobrenome){
    this.nome = nome; 
    this.sobrenome = sobrenome; 
}

// {} <--> this; 

const p1 = new Pessoa('Luiz', 'Miranda'); 

console.log(p1); 

//impirmir: Pessoa { nome: 'Luiz', sobrenome: 'Miranda' }
