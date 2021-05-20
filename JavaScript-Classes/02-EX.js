//Symbol é uma propriedade privada; 
/*
 A função Symbol() retorna um valor do tipo símbolo (symbol), tem propriedades estáticas que expõem 
vários membros dos objetos nativos, possuem métodos estáticos que expõem o registro de símbolos globais
 e se parecem com uma classe de objeto nativo, mas estão incompletos como construtor porque não suportam
 a sintaxe "new Symbol()" .
*/

const _velocidade = Symbol('velocidade'); 

class Carro {
    constructor(nome){
        this.nome = nome; 
        this[_velocidade] = 0; 
    }

    get velocidade(){
        return this[_velocidade]; 
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return; 
        if(valor >= 100 || valor <= 0) return; 
        this[_velocidade] = valor; 
    }

    acelerar(){
        if(this[_velocidade] >= 100) return; 
        this[_velocidade]++; 
    }

    freiar(){
        if(this[_velocidade] <= 0) return; 
        this[_velocidade]--;  
    }
}

const c1 = new Carro ('Fusca')

c1.velocidade = 55; 
console.log(c1.velocidade); 