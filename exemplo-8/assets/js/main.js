const relogio = document.querySelector('.relogio'); 
const iniciar = document.querySelector('.iniciar'); 
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos= 0; 
let timer;


document.addEventListener('click', function(e){
      const elemento = e.target; 

      if(elemento.classList.contains('zerar')){
         clearInterval(timer)
         segundos = 0; 
         relogio.innerHTML ='00:00:00';

         relogio.classList.remove('pausado')
      }
      

      if(elemento.classList.contains('iniciar')){
         clearInterval(timer);
         inicioRelogio(); 

         relogio.classList.remove('pausado')
      }

      if(elemento.classList.contains('pausar')){
         clearInterval(timer); 
         relogio.classList.add('pausado')
      }

})

function criaHoraDosSegundos(segundos){
      const data = new Date(segundos * 1000); 
      return data.toLocaleTimeString('pr-BR', {
            hour12: false,
            timeZone: 'UTC'
      }); 
  }; 


function inicioRelogio(){
       timer = setInterval(function() {
            segundos++; 
            relogio.innerHTML = criaHoraDosSegundos(segundos); 
      }, 1000); 
};  