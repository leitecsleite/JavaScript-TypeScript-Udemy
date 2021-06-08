//705.484.450-52 

export default class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D/g,''),
            writable: false,  
            enumerable: false, 
            configurable: false,
        }); 
    }

    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; 
    }

    geraNovoCpf(){
        const cpfSemDigito = this.cpfLimpo.slice(0, -2); 
        const digito1 = this.geraDigito(cpfSemDigito); 
        const digito2 = this.geraDigito(cpfSemDigito + digito1); 
        this.novoCPF = cpfSemDigito + digito1 + digito2; 
    }

    static  geraDigito(cpfSemDigito){
        let total = 0; 
        let reverso = cpfSemDigito.length + 1; 
        for (let stringNumerica of cpfSemDigito){
           // console.log(stringNumerica, reverso);
           total += reverso * Number(stringNumerica); 
            reverso --; 
        }
        const digito = 11 - (total % 11); 
        return digito <= 9 ? String(digito) : '0'; 
    }

    valida(){
        if(!this.cpfLimpo) return false; 
        if(typeof this.cpfLimpo != 'string') return false; 
        if(this.cpfLimpo.length !== 11) return false; 
        if(this.eSequencia()) return false; 
        this.geraNovoCpf(); 
        console.log(this.novoCPF); 
        console.log(this.cpfLimpo)
        return this.novoCPF === this.cpfLimpo; 
    }
}

console.log('cheguei aqui')