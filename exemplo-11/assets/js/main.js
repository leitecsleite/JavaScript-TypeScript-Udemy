function Calculadora() {
    this.display =  document.querySelector('.display'); 
    this.clear = document.querySelector('.clear'); 

    this.inicia = () => {
        this.capturaClick();
        this.capturaEnter(); 
    }        

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13){
                 this.realizaConta();  
                return; 
            } 
        } )
    }

    this.capturaClick =() =>{
        document.addEventListener('click', e => {
            const el = e.target; 
            console.log(el); 

            if(el.classList.contains('btn-num')) this.addNumDisplay(el); 

            if(el.classList.contains('btn-clear')) this.clear(el); 

            if(el.classList.contains('btn-del')) this.del(); 

            if(el.classList.contains('btn-eq')) this.realizaConta(); 

        })
    }

    this.addNumDisplay = el =>  {
        this.display.value += el.innerText;
        this.display.focus(); 
    }

    this.clear = el => this.display.value = '';
    this.del = () => this.display.value.slice(0, -1);
    
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value); 

            if(!conta){
                alert('conta Inválida');
                return; 
            }
            this.display.value = conta; 

        }catch (e){
            alert('Conta inválida'); 

        }
    }
    
}

const calculadora = new Calculadora(); 
calculadora.inicia(); 