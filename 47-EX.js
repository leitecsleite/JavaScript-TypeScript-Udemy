// retorna apenas nome; 

const pessoas = [
    {nome : 'Luiz', idade: 62},
    {nome : 'Maria', idade: 23},
    {nome : 'Eduardo', idade: 55},
    {nome : 'Leticia', idade: 19},
    {nome : 'Rosana', idade: 32},
    {nome : 'Wallace', idade: 47},
]; 


const nomes = pessoas.map(obj => {
    return obj.nome; 
})

console.log(nomes)

//Imprimir: [ 'Luiz', 'Maria', 'Eduardo', 'Leticia', 'Rosana', 'Wallace' ]