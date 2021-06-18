const nome = 'Lucas'; 
const sobrenome = "Leite"; 

const falaNome = () => {
    return nome + " " + sobrenome; 
}

//module.exports.nome = nome; 
//module.exports.sobrenome = sobrenome; 
//module.exports.falaNome = falaNome; 

exports.nome = nome; 
exports.sobrenome = sobrenome; 
exports.falaNome = falaNome; 
