//array com objetos. 
const pessoas = [
  {
    nome: 'Lucas', 
    sobrenome: 'Leite',
    idade: 28
  },

  {
    nome: 'Matheus', 
    sobrenome: 'Leite',
    idade: 28
  },

  {
    nome: 'Arthur', 
    sobrenome: 'Leite',
    idade: 28
  },

  {
    nome: 'Gabriel', 
    sobrenome: 'Leite',
    idade: 28
  },
  {
    nome: 'Leonardo', 
    sobrenome: 'Leite',
    idade: 28
  },
]

const resultado = document.querySelector('.resultado'); 

pessoas.map((pessoa) => {
  resultado.innerHTML += `<p>Nome:${pessoa.nome}</p>`
})