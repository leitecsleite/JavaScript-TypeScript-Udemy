// Retorna a pessoa mais velha; 



const pessoas = [
    {nome : 'Luiz', idade: 62},
    {nome : 'Maria', idade: 23},
    {nome : 'Eduardo', idade: 55},
    {nome : 'Leticia', idade: 19},
    {nome : 'Rosana', idade: 64},
    {nome : 'Wallace', idade: 63},
];  

const maisVelha = pessoas.reduce((acumulador, valor)=> {
    if(acumulador.idade > valor.idade) return acumulador; 
    return valor; 
})

console.log(maisVelha); 

//imprimir: { nome: 'Rosana', idade: 64 }; 