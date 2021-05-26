function rand(min, max){
    min *= 1000; 
    max *= 1000; 
    return Math.floor(Math.random() * (max -min) + min); 
}


function esperaAi (msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);               
        }, tempo)
    }); 

}

esperaAi("frase 1", rand(1, 3))
   .then(resposta => {
       console.log(resposta)
       return esperaAi('Frase 2', rand(1,3)); 
   })
   .then(resposta => {
       console.log(resposta)
       return esperaAi('Finalizamos o processo', rand(1,3))
   })
   .then(resposta => {
       console.log(resposta)
   })
   .catch(); 