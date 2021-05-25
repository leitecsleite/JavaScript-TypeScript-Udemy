class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector('.formulario'); 
        this.eventos(); 

    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e); 
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos(); 
    }

    camposSaoValidos(){
        let valid = true;
        
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove(); 
        }

        for (let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText; 
           
            if(!campo.value){
               this.erro(campo,`Campo "${label}" não pode estar em branco.`);
               valid = false; 
           }

           if(campo.classList.contains('cpf')){
               if(!this.validaCPF(campo)) valid = false; 
           }

           if(campo.classList.contains('usuario')){
               if(!this.validaUsuario(campo)) valid = true; 
           }

        }
    }

    validaUsuario(campo){
        const usuario = campo.value; 
        let valid = true; 

        if(usuario.length < 3 || usuario.length > 12){
            this.erro(campo, 'Usuário deverá ter entre 3 e 12 caracteres')
            valid = false; 
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.erro(campo, 'Usuário só pode conter letras e número')
            return false; 
        }
        return true; 
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value); 

        if(!cpf.valida()){
            this.erro(campo, 'CPF inválido. '); 
            return false; 
        }

        return true; 
    }

    erro(campos,  msg){
        const div = document.createElement('div'); 
        div.innerHTML = msg; 
        div.classList.add('error-text'); 
        //insertAdjacentElement -> 
        campos.insertAdjacentElement('afterend', div); 
    }
}

const valida = new ValidaFormulario();








/* 

insertAdjacentHTML analisa o texto especificado como HTML ou XML
 e insere os nós que resultam na árvore DOM em uma posição especificada.
Não reanalisa o elemento que está a ser utilizado e, portanto, não corrompe 
os elementos existentes dentro do elemento. Esta, e evitando a etapa extra de
serialização, torna-o muito mais rápido do que a manipulação direta innerHTML.      

element.insertAdjacentElement(posiçao , texto); 



*/