const express = require('express');
const userRouter = require('./routes/userRoutes');
const bodyParser = require('body-parser')


const app = express(); 
const port = 3000

userRouter(app); 
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/', (req, res)=> res.send('Olá Mundo, estou aprendendo a usar express')); 

app.listen(port, () => console.log('Está funcionando'))