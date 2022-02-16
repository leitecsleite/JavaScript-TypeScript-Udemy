const nome = 'Luiz'; 
const sobrenome = 'Leite'

const idade = '27'; 

function soma (x,y){
    return x +y
}


export class Pessoa{
    constructor(nome, sobrenome){
        this.nome =nome; 
        this.sobrenome =sobrenome; 
    }

      nomeCompleto() {
        return this.nome  +' '+ this.sobrenome
    }
}

export {nome, soma }; 