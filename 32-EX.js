// Factory function (Função Fábrica); 
//função construtora

function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        //Getter
        get nomeCompleto (){
            return `${this.nome} ${this.sobrenome}`;
    
        },

        //Setter 
        set nomeCompleto (valor){
            valor = valor.split(' '); 
            this.nome = valor.shift(); 
        }, 



        //metodo dentro do objeto
        fala(assunto){
            return `${this.nome} está ${assunto}`; 
        },
        altura: altura,
        peso: peso,
        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2); 
            return indice.toFixed(2); 
        }

    }
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80); 
console.log(p1.fala('falando sobre JS'))
console.log(p1.imc)


p1.nomeCompleto = 'Lucas Carvalho Leite'
console.log(p1.nomeCompleto); 

//imprimir: Luiz está falando sobre JS
//24.69
//Lucas Otávio