const _sobrenome = Symbol('Sobrenome'); 

class Pessoa {
    constructor(nome){
        this.nome = nome; 
        this[_sobrenome] =''; 
    }

    get nomeCompleto(){
        return this.nome + ' ' + this[_sobrenome]; 
    }

    set nomeCompleto(sobrenome){
        this[_sobrenome] = sobrenome;  
    }
}

const p1 = new Pessoa ('Lucas'); 
p1.nomeCompleto = 'Oliveira'
console.log(p1.nomeCompleto)