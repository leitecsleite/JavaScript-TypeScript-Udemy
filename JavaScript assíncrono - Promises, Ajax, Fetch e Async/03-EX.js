/*
Promise.all() -> 

O método Promise.all(iterable) retorna uma única Promise que resolve quando
todas as promises no argumento iterável forem resolvidas ou quando o iterável 
passando como argumento não contém promises. É rejeitada com o motivo promisesque foi
rejeitada. 
*/

const promise1 = Promise.resolve(3); 
const promise2 = 42; 
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo'); 
}); 

Promise.all([promise1, promise2, promise3]).then((value => {
    console.log(value); 
}))
//imprimir: [ 3, 42, 'foo' ]


/*
Promise.all(iterable)

Parâmetros 
  itarable 
    um objeto iterável, como uma array ou string 
*/