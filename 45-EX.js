
//Retorne as pessoas que tem o nome com 5 letras ou mais 
//Retorne as pessoas com mais de 50 anos; 

const pessoas = [
    {nome : 'Luiz', idade: 62},
    {nome : 'Maria', idade: 23},
    {nome : 'Eduardo', idade: 55},
    {nome : 'Leticia', idade: 19},
    {nome : 'Rosana', idade: 32},
    {nome : 'Wallace', idade: 47},
]; 


const filtrandoPessoas= pessoas.filter(function(valor){
    let num = 5; 
    let idadeMaior = 50; 
    const novoObjeto = (valor.nome.length >= num && valor.idade > idadeMaior ); 


    return novoObjeto; 
})

console.log(filtrandoPessoas); 
 
//imprimir: [ { nome: 'Eduardo', idade: 55 } ]; 


