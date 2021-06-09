import geraSenha from './gerador'; 

const qtdCaracteres = document.querySelector('.qtd-caracteres'); 
const senhaGerada = document.querySelector('.senha-gerada');
const chkMaiusculas = document.querySelector('.chk-maiuscula'); 
const chkMinusculas = document.querySelector('.chk-minuscula');
const chkNumeros = document.querySelector('.chk-numero'); 
const chkSimbolos = document.querySelector('.chk-simbolos');
const  gerarSenha = document.querySelector('.gerar-senha'); 

    gerarSenha.addEventListener('click',() => {
     senhaGerada.innerHTML = gera();
    }); 

function gera(){
    const senha = geraSenha(
        qtdCaracteres.value, 
        chkMaiusculas.checked, 
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked,
    ); 

    return senha || 'Nada selecionado';

}

