//IIF3 -> Immediately invoked function expression 

(function (){
    const sobrenome = 'Miranda'; 
    function criaNome(nome){
        return nome + ' ' + sobrenome; 
    }

    function falaNome(){
        console.log(criaNome('Luiz')); 
    }

    falaNome(); 
})(); 