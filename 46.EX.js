


const pessoas = [
    {nome : 'Luiz', idade: 62},
    {nome : 'Maria', idade: 23},
    {nome : 'Eduardo', idade: 55},
    {nome : 'Leticia', idade: 19},
    {nome : 'Rosana', idade: 32},
    {nome : 'Wallace', idade: 47},
]; 

const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a'); 
})

console.log(nomeTerminaComA); 