//Declaração de função (function hosting)
falaOi(); 
function falaOi(){
    console.log('oie'); 
}

//First-class object (objetos de primeira classe)
//Function expression

const souUmDado = function(){
    console.log('Sou um dado'); 
}

souUmDado(); 

//Arrow Function 
const funcaoArrrow = () => {
    console.log('Sou uma arrow function'); 
}

funcaoArrrow(); 

//Dentro de um objeto  posso ter uma função; 

const obj = {
    falar(){
        console.log('Estou falando ...')
    }
}; 

obj.falar(); 