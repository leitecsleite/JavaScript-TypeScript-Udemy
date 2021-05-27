function rand(min, max){
    min *= 1000;
    max *= 1000; 
    return Math.floor(Math.random() * (max -min) + min); 
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false); 

        setTimeout(() => {
            resolve(msg); 
        }, tempo)
    })

} 

/*
Promise.all(lista) ->  Retorna uma promise que é resolvida quando todas
as promises no argumentos lista forem resolvida ou rejeitada
 assim que uma das promises da lista for rejeitada. Se a promise retornada
 dor resolvida, ela é com uma array dos valores das promises resolvidas da
 lista. Se a promise for rejeitada, ela é rejeitada com o motivo da primeira
 promise que foi rejeitada na lista.Este método pode ser útil para agregar
 resultado de múltiplas promises.

*/

const promises = [
    'primeiro valor',
    esperaAi('promise 1', rand(1,3)),
    esperaAi('promise 2', rand(1,3)),
    esperaAi('promise 3', rand(1,3)),
    'Outro valor'
]; 

Promise.all(promises)
   .then(function(valor){
       console.log(valor)
   }).catch(function(erro){
       console.log(erro)
   })