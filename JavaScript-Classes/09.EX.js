class chamadaDoMetodoEstatico {
    static metodoEstatico(){
        return 'O método estático foi chamado'; 
    }

    static outroMetodoEstatico(){
        return this.metodoEstatico() + 'de outro método estático'; 
    }
}

console.log(chamadaDoMetodoEstatico.metodoEstatico());
console.log(chamadaDoMetodoEstatico.outroMetodoEstatico()); 