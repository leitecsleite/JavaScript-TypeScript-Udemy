const express = require('express'); 

const app = express(); 
const router = require('./routes')
const porta = 5000; 

const path = require('path')

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname, 'public'))); 

app.set('views', path.resolve(__dirname, 'src', 'views') )
app.set ('view engine', 'ejs'); 

app.use(router)

app.listen(porta, () => {
    console.log('O servidor está rolando')
}); 