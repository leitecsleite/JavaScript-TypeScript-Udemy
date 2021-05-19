//FACTORY FUNCTION novo


function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando.`); 
        }, 

        comer(){
            console.log(`${this.nome} está comendo.`); 
        },
        beber(){
            console.log(`${this.nome} está bebendo`); 
        }
    }
    // qual o prototype a ser utilizado pessoaPrototype e recebe mais um parâmetro
    // as chaves e nela eu posso colocar o valor; 
    return Object.create(pessoaPrototype, {
        nome: {value: nome}, 
        sobrenonme: {value: sobrenome},
    })
}

const pessoa1= criaPessoa('Lucas', 'Leite'); 
console.log(pessoa1.falar()); 