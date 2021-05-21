

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

//smartphone
class Smartphone extends DispositoEletronico {
    constructor(nome, cor, modelo){
        super(nome)

        this.cor = cor;
        this.modelo = modelo;  
    }
}

// class Tablet 
class Tablet extends DispositoEletronico{
    constructor(nome, temWifi){
        super(nome); 
        this.temWifi = temWifi; 
    }

    ligar () {
        console.log('Olha, você alterou o método ligar. '); 
    }
}




const s1 = new Smartphone('iPhone', 'Preto', '7 Plus'); 
s1.ligar(); 
console.log(s1); 
/*Smartphone {      
    nome: 'iPhone', 
    ligado: true,   
    cor: 'Preto',   
    modelo: '7 Plus'
  }
*/

const tablet1 = new Tablet('Samsung', true); 

console.log(tablet1); 
//Imprimir: Tablet { nome: 'Samsung', ligado: false, temWifi: true }

