const inputTarefa= document.querySelector(".input-tarefa"); 
const btnTarefa = document.querySelector('.btn-tarefa'); 
const tarefa = document.querySelector('.tarefas');


btnTarefa.addEventListener('click', function(){
      if(!inputTarefa.value) return; 
      criaTarefa(inputTarefa.value); 
})

//escutar o evento do teclado 
inputTarefa.addEventListener('keypress', function(e){
      if(e.keyCode === 13){
            if(!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);  
      }
})

//limpar o valor do input
function limparInput(){
      inputTarefa.value = ''; 
      inputTarefa.focus(); 
}




function criaTarefa(textoInput){
      const li = criaLi(); 
      li.innerText = textoInput; 
      tarefa.appendChild(li)
      limparInput(); 
      criaBotaoApagar(li); 
      salvarTarefa(); 

}

function criaLi(){
      const li = document.createElement('li'); 
      return li; 
}

//criar o botão de apagar 
function criaBotaoApagar(li){
      li.innerText += ''; 
      const botaoApagar = document.createElement('button'); 
      botaoApagar.innerText = 'Apagar'; 

      botaoApagar.setAttribute('class', 'apagar'); 
      botaoApagar.setAttribute('title', 'apagar esta tarefa'); 
      li.appendChild(botaoApagar)

}

//salvar as tarefas; 
function salvarTarefa(){
      const liTarefas = tarefa.querySelectorAll('li'); 
      const listaDeTarefas = []; 

      for (let tarefas of liTarefas) {
            let tarefaTexto = tarefas.innerText; 
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); 
            listaDeTarefas.push(tarefaTexto);
      }
      
      const tarefasJSON = JSON.stringify(listaDeTarefas); 
      console.log(tarefasJSON)
      localStorage.setItem('tarefa', tarefasJSON)
}

//
function adicionaTarefasSalvar(){
      const tarefas = localStorage.getItem('tarefas'); 
      const listaDeTarefas = JSON.parse(tarefas); 
      console.log(tarefas); 

      for(let tarefa of listaDeTarefas){
            criaTarefa(tarefa); 
      }
}

adicionaTarefasSalvar(); 



document.addEventListener('click', function(e){
      const el = e.target; 

      if(el.classList.contains('apagar')){
            el.parentElement.remove();
            salvarTarefas();  
      }
})




