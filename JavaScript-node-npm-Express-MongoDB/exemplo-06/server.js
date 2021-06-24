const express = require('express'); 
const app = express(); 

const port = 3000; 

app.listen(port, () =>  console.log('está sendo executado'))

app.get('/', (req, res) => {
    res.send(`
     <form action = "/" method = "POST">
     Nome : <input type = "text" name ="nome">
     <button>Enviar</button>
    `); 
}); 

app.post('/', (req, res) => {
    res.send('Enviado com sucesso :D')
})

app.get('/contato',(req, res)=> {
    res.send('Bem-Vindo na página de contato')
})


