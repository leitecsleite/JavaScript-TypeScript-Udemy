

const pessoas = [
    {id: 2, nome: 'Maria'},
    {id: 3, nome: 'Luiz'},
    {id: 4, nome: 'Helena'}, 
]; 


const novasPessoas = new Map(); 
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {... pessoa}) 
}

console.log(novasPessoas);

//não muda a ordem dos objetos 