const h1 = document.querySelector('.container h1');
const data = new Date(); 

function getDiaSemanaTexto(diaSemana){
  let diaSemanaTexto; 
  switch (diaSemana){
      case 0: 
        diaSemanaTexto = 'Domingo'; 
        return diaSemanaTexto; 
      
      case 1: 
        diaSemanaTexto = 'Segunda-Feira'; 
        return diaSemanaTexto; 
        
      case 2: 
        diaSemanaTexto = 'Terça-Feira'; 
        return diaSemanaTexto; 
        
      case 3 :
         diaSemanaTexto = 'Quarta-Feira'; 
         return diaSemanaTexto; 
      
      case 4:
          diaSemanaTexto= 'Quinta-Feira'; 
          return diaSemanaTexto;  
  
      case 5:
          diaSemanaTexto = 'Sexta-Feira'; 
          return diaSemanaTexto; 
      
      case 6:
          diaSemanaTexto = 'Sabado'; 
          return diaSemanaTexto;  
      
      default: 
         diaSemanaTexto = 'Não encontrado'; 
         return diaSemanaTexto; 
  
}

}




function getNomeMes(mes){
  let nomeDoMes; 
  switch (mes){
      case 0: 
        nomeDoMes= 'Janeiro'; 
        return nomeDoMes; 
      case 1: 
        nomeDoMes= 'Fevereiro'; 
        return nomeDoMes; 
      case 2: 
        nomeDoMes= 'Março'; 
        return nomeDoMes; 
        
      case 3: 
        nomeDoMes= 'Abril'; 
        return nomeDoMes; 

      case 4: 
        nomeDoMes= 'Maio'; 
        return nomeDoMes; 

      case 5: 
        nomeDoMes= 'Junho'; 
        return nomeDoMes; 

      case 6: 
        nomeDoMes= 'Julho'; 
        return nomeDoMes; 

      case 7: 
        nomeDoMes= 'Agosto'; 
        return nomeDoMes; 

      case 8: 
        nomeDoMes= 'Setembro'; 
        return nomeDoMes; 

      case 9: 
        nomeDoMes= 'Outubro'; 
        return nomeDoMes; 

      case 10: 
        nomeDoMes= 'Novembro'; 
        return nomeDoMes; 

      case 11: 
        nomeDoMes= 'Dezembro'; 
        return nomeDoMes; 

      default: 
         diaSemanaTexto = 'Não encontrado'; 
         return diaSemanaTexto; 
  
}

}

function zeroEsquerda(num){
  return num >= 10 ? num: `0${num}`; 
}


function criarDate(data){
  const diaSemana = data.getDay(); 
  const mes = data.getMonth(); 

  const nomeDia = getDiaSemanaTexto(diaSemana); 
  const nomeMes = getNomeMes(mes);
  
return `${nomeDia}, ${data.getDay()} de ${nomeMes} de ${data.getFullYear()}` +
` ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
}


h1.innerHTML = criarDate(data)




