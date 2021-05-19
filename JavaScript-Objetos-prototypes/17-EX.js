
//Conta corrente; 

function Conta(agencia, conta , saldo){
    this.agencia = agencia; 
    this.conta = conta; 
    this.saldo = saldo; 
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: ${this.saldo}`); 
        this.verSaldo(); 
        return; 
    }; 

    this.saldo -= valor; 
    this.verSaldo(); 
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor; 
    this.verSaldo(); 
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} ` + ` Saldo: R$: ${this.saldo.toFixed(2)} `)
}




//Conta corrente;
function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo); 
    this.limite = limite; 
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente; 

//Conta corrente têm o limite de saque, mesmo negativo; 
ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`); 
        return
    }

    this.saldo -= valor; 
    this.verSaldo();
}

/*const contaCorrent = new ContaCorrente(11, 22, 0, 100); 
contaCorrent.depositar(10); 
contaCorrent.sacar(110);
//Imprimir: Ag/c: 11/22  Saldo: R$: 10.00 
//Ag/c: 11/22  Saldo: R$: -100.00 */


//Conta Poupança 

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo); 
}
// criado objeto 
ContaPoupanca.prototype = Object.create(Conta.prototype); 
ContaPoupanca.prototype.constructor  = ContaPoupanca;

const contPoupanca = new ContaPoupanca(12, 33, 0);
contPoupanca.depositar(10); 
contPoupanca.sacar(110); 
contPoupanca.sacar(1); 

