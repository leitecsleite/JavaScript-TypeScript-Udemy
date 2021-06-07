export const nome = 'Lucas'; 

export const sobrernome = 'Miranda'; 

export const idade = 30; 

export default function soma(x, y){
    return x + y; 
}

export  default class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome; 
        this.sobrenome = sobrenome;
    }

     nomeCompleto(){
         return this.nome + " " + this.sobrenome; 
     } 
}