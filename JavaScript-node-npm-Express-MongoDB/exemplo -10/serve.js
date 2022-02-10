const { response, urlencoded } = require('express');
const express = require('express');
const app = express(); 

app.use(
    express.urlencoded(
        {
           extended:true
        }
)); 

const port =  5000

app.listen(port, () => console.log(`está rodando na http://localhost:${port}`))

app.get('/', (req, response)=> {
    response.send(`<form action ="/" method ="POST">
    Nome do cliente: <input type ="text" name="nome">
    <button>Olá Mundo</button>)
    </form>`)


 }) 

 app.get('/testes/:idUsuarios?', (req, res)=>{
     console.log(req.params)
     console.log(req.query)
     res.send(req.params.idUsuarios)
 })

app.post('/', (req, respo)=>{
    console.log(req.body)
    respo.send(`Você enviou ${req.body.nome}`)
})

