//Revisão de objetos; 
//deletar uma chave do objeto, usa o delete; 


const pessoa1 = new Object(); 

pessoa1.nome = 'Luiz'; 
pessoa1.sobrenome = 'Leite';

delete pessoa1.nome; 

console.log(pessoa1); 

//imprimir: {sobrenome: 'Leite'}; 