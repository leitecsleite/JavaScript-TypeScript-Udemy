
function meuEscopo(){
    const form = document.querySelector('.form'); 

   // form.onsubmit = function (evento){
   //   evento.prevendDefault(); 
   //     alert(1); 
   //    console.log('Foi enviado');
    const resultado = document.querySelector('.resultado'); 
    
    const pessoas = []; 

   form.addEventListener('submit', recebeEventoForm); 
   function recebeEventoForm(evento) {
      evento.preventDefault(); 
      const nome = form.querySelector('.nome').value; 
      const sobrenome = form.querySelector('.sobrenome').value; 
      const peso = form.querySelector('.peso').value;
      const altura = form.querySelector('.altura').value; 
     
       
       pessoas.push({
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura

    });
      console.log(pessoas);
      pessoas.map((pessoa) => {
         resultado.innerHTML += `<p>${nome} ${sobrenome}` + `${peso}${altura}</p>`
       })
    }
    
   
};



meuEscopo(); 