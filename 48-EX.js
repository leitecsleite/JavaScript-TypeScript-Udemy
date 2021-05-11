
//  retorne apenas idade: ; 

const pessoas = [
    {nome : 'Luiz', idade: 62},
    {nome : 'Maria', idade: 23},
    {nome : 'Eduardo', idade: 55},
    {nome : 'Leticia', idade: 19},
    {nome : 'Rosana', idade: 32},
    {nome : 'Wallace', idade: 47},
];  


const idades = pessoas.map(obj =>{
    delete obj.nome; 
    return obj; 
})

console.log(idades)


//Imprimir: [
// { idade: 62 },
//  { idade: 23 },
//  { idade: 55 },
//  { idade: 19 },
//  { idade: 32 },
//  { idade: 47 }
// ]