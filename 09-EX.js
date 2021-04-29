//Operação ternária; 

const pontuacaoUsuario = 500; 
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP': 'Usuário normal'; 


const corUsuario = 'Pink'; 
const corPadrao = corUsuario || 'preta'; 
console.log(nivelUsuario, corPadrao); 

//Imprimir: Usuário normal Pink