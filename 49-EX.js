


const pessoas = [
    {nome : 'Luiz', idade: 62},
    {nome : 'Maria', idade: 23},
    {nome : 'Eduardo', idade: 55},
    {nome : 'Leticia', idade: 19},
    {nome : 'Rosana', idade: 32},
    {nome : 'Wallace', idade: 47},
];  

const comId = pessoas.map((obj, indice) => {
    const newObj = {...obj} ; 
    newObj.id = indice; 
    return newObj; 
}); 

console.log(comId); 


