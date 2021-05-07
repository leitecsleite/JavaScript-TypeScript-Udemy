function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelectorAll('.btn-clear'),

        //metódos

        clearDisplay(){
            this.display.value = ''; 
        },
        realizaConta(){
            let conta = this.display.value

            try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta inválida');
                    return; 
                }
                this.display.value = conta; 
            }catch(e){
                alert('Conta inválida'); 

            }

        },

        apagarUm(){
           this.display.value = this.display.value.slice(0, -1); 
        },

        inicia(){
            this.cliqueBotoes(); 
        },

        cliqueBotoes(){
            // this -> calculadora;
            document.addEventListener('click', e => {
                const el = e.target; 
                console.log(el);

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText); 
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay(); 
                }

                if(el.classList.contains('btn-del')){
                    this.apagarUm(); 
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta(); 
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor; 

        }
    }
}

const calculadora = criaCalculadora(); 
calculadora.inicia(); 