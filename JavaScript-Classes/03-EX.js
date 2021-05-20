

class DispositoEletronico{
    constructor(nome){
        this.nome =nome; 
        this.ligado = false; 
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado'); 
            return; 
        }

        this.ligado = true; 
    }

    desligado(){
        if(!this.ligado){
            console.log(this.nome + '  já desligado'); 
            return; 
        }

         this.ligado = false; 
    }
       
}

class Smartphone extends DispositoEletronico {
    constructor(nome, cor, modelo){
        super(nome)

        this.cor = cor;
        this.modelo = modelo;  
    }
}

const s1 = new Smartphone('iPhone', 'Preto', '7 Plus'); 
s1.ligar(); 
console.log(s1); 


