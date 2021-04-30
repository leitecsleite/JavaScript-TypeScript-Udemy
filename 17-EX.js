// For in  = ler os índices ou chaves do objeto
const pessoas = [
    {
        nome: 'Lucas',
        sobrenome: 'Leite',
        idade: 27
    }, 

    {
        nome: 'Luiz', 
        sobrenome: 'Leite', 
        idade: 29
    }
]

for (let index in pessoas){
  let pessoa = pessoas[index]; 
  console.log(`nome: ${pessoa.nome} ${pessoa.sobrenome} e idade : ${pessoa.idade}`)

}

//Imprimir: 
/**nome: Lucas Leite e idade : 27
nome: Luiz Leite e idade : 29 */
