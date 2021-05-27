//Promise.resolve.



function rand(min, max){
    min *= 1000;
    max *= 1000; 
    return Math.floor(Math.random() * (max -min) + min); 
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        

        setTimeout(() => {
          if(typeof msg !== 'string') reject(false); 
            resolve(msg); 
        }, tempo)
    })

}

/*
Retorna um objeto Promise que foi resolvido com um dado valor. Se o valor é 
thenable (possui um método then), a promise retorna "seguirá este método", 
adotando esse estado eventual; caso contrário a promise retornada será realizada
com o valor.Geralmente, se você que saber se im valor é uma promise ou não,
utilize Promise.resolve(valor) e trabalhe com a valor de retorno que é sempre uma 
promise. 


*/


function baixaPagina(){
    const emCache = false; 

    if(emCache){
        return Promise.resolve('Página em cache'); 
    }else {
        return esperaAi('Baixei a página', 3000); 
    }
}

baixaPagina()
  .then(dadosPagina => {
      console.log(dadosPagina)
  })
  .catch(e => console.log(e)); 