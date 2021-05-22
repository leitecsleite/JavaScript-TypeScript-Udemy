


class ControleRemoto {
    constructor(tv){
        this.tv =tv; 
        this.volume = 0; 
    }

    aumentarVolume(){
        this.volume += 2; 
    }

    diminuirVolume(){
        this.volume -= 2; 
    }

    //Método de estático 
    static trocaPilha(){
        console.log("OK, vou trocar. "); 
    }
}

const controle1 = new ControleRemoto('LG'); 

console.log(controle1); 

//esse metodo é relação da class
ControleRemoto.trocaPilha();  