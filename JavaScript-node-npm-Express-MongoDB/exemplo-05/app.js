const path = require('path'); 
const routeFile = path.resolve(__dirname, 'teste.json')
const escreve= require('./module/write')
const read = require('./module/read'); 

//const pessoas = [
//    {nome: 'Lucas', idade:'18'},
//    {nome: 'Maria',  idade:'20'}, 
//    {nome: 'Mateus', idade:'8'}, 
//    {nome: 'Eduardo', idade:'3'}, 
//    {nome: 'Arthur', idade: '12'}
//]

//const json = JSON.stringify(pessoas, '', 2);

//escreve(routeFile, json)


async function lerAquivo(caminho){
    const data = await read(caminho)
    render(data);  
}

//const dataFiles = lerAquivo(routeFile)
//     .then(data => console.log(data)) 

function render(data){
    data = JSON.parse(data);
    data.forEach(val => console.log(val.nome)); 
}

lerAquivo(routeFile); 