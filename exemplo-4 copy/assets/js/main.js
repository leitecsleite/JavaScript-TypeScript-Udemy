
const form = document.querySelector('.formaulario');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  setResultado('Olá Mundo!'); 


  const inputPeso = e.target.querySelector('#peso'); 
  const inputAltura = e.target.querySelector('#altura'); 

  const peso = Number(inputPeso.value); 
  const altura = Number(inputAltura.value);
  
  console.log(peso, altura)

}); 


function criaP(className){
    const p = document.createElement('p'); 
    return p;     
}

function setResultado(msg){
    const resultado = document.querySelector('.resultado'); 
    resultado.innerHTML = ''; 
    const p = criaP(); 

    resultado.appendChild(p); 
    p.innerHTML = 'Qualquer coisa'; 
}

