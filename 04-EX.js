const alunos = ['Luiz', 'Maria', 'João']; 

//exclui o primeiro elemento de uma array, se tiver vazio ele retorna underfide
const removido = alunos.shift();

console.log(removido); 
console.log(alunos); 

/*Imprimir: 
Luiz
[ 'Maria', 'João' ]
*/