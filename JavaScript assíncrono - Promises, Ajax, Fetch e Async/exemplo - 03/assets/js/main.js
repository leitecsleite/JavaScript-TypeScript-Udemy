fetch('pessoas.json')
.then(resolve => resolve.json())
.then(json => carregaElementNaPagina(json));

function carregaElementNaPagina(json){
    const table = document.createElement('table');
    const result = document.getElementById('result'); 

    console.log(result)
  
   
     json.map(pessoa =>{
        const tr = document.createElement('tr'); 
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td = document.createElement('td');

         td.innerHTML = pessoa.nome;
         td2.innerHTML = pessoa.idade;
         td3.innerHTML = pessoa.salario;


          tr.appendChild(td)
          tr.append(td2)
          tr.append(td3)

         table.append(tr) 
         result.append(table)
         console.log(result)
    })       
}
