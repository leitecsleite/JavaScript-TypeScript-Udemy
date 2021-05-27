
/*
No exemplo abaixo executamos uma promise que resultou em uma falha, ou seja,
nossa execução foi direcionada ao bloco catch.
veremos no bloco abaixo como esse tratamento é feito:

*/

function getTodosOsUsuarios(){
    return new Promise ((resolve, reject) => {
        reject(new Error("Não foi possível recuperar a lista de contatos"))
    })
}

getTodosOsUsuarios()
    .catch(err => console.log(err.message))


