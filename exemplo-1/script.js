let numeroString = prompt("Digite um número");
const number = Number(numeroString); 
const numeroTitulo = document.getElementById('numero-titulo'); 
const texto = document.getElementById('texto'); 
const raizqrd = document.getElementById('raizqrd'); 
const inteiro = document.getElementById('inteiro'); 
const arredondaParaBaixo = document.getElementById('ArredondaPraBaixo'); 
const arredondaParaCima = document.getElementById('ArredondaPraCima'); 
const decimais = document.getElementById('decimais');
const eInteiro = document.getElementById('isInteger'); 

numeroTitulo.innerHTML= number;
inteiro.innerHTML = Math.round(number); 
eInteiro.innerHTML = `<p>Esse Número ${number} é: ${(Number.isInteger(number))}</p>`

arredondaParaBaixo.innerHTML = Math.floor(number); 
arredondaParaCima.innerHTML = Math.ceil(number); 

texto.innerHTML = `<p>Seu  número ${number} + 2 = ${number + 2}</p>`;