const express = require('express'); 

const route = express.Router(); 
const homeController = require('./controllers/homeControlle');
const contatoController = require('./controllers/contatoControlle'); 

//Rotas da HOME
route.get('/', homeController.paginaIncial); 
route.post('/', homeController.receberDados);

//Rotas de Contato 

route.get('/contato', contatoController.paginaInicial); 

module.exports =  route; 

