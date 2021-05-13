/*
Object.assign (des, any)
Object.getOwnPropertyDescriptor (o, 'prop')
...(spread)


// já vi 

Object.keys (retorna as chaves)
Object.freezer (congela o Objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (Define uma propriedade)
*/

const produto = {
    nome: 'Caneca', 
    preco: 1.8,
}

const caneca = {
    ...produto, 
    material: 'porcelana'
}; 

caneca.nome = 'copo'
caneca.preco = 2.5; 


console.log(produto); 
console.log(caneca); 