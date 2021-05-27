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
Promise.race -> 

O método Promise.race(itarable) retorna uma promise que resolve ou reheita assim que 
umas das promises no iterável resolver ou rejeitar, com o valor ou razão 
daquela promise. 

*/
const promises = [
    esperaAi('promise 1', rand(1,3)),
    esperaAi('promise 2', rand(1,3)),
    esperaAi('promise 3', rand(1,3)),
    esperaAi(222, rand(1,3))
]; 

Promise.race(promises)
   .then(function(valor){
       console.log(valor)
   }).catch(function(erro){
       console.log(erro)
   })