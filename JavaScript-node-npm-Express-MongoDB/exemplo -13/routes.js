const express = require('express'); 

const route = express.Router(); 

const contatoController = require('./src/controllers/contatoController'); 
const homeController = require('./src/controllers/homeController');

//Home 
route.get('/', homeController.paginaInicial)

//Contato
route.get('/contato', contatoController.paginaInicial )

module.exports = route; 

