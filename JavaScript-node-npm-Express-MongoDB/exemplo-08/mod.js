module.exports = class Cachorro {
    constructor(nome){
        this.nome = nome; 
    }

    ladir(){
        return `${this.nome} está latindo`
    }
}; 