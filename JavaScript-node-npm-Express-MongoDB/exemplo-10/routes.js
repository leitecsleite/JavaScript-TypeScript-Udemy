const express = require('express'); 

const route = express.Router(); 
const homeController = require('./controllers/homeControlle')


route.get('/', homeController.paginaIncial); 
route.post('/', homeController.receberDados);

module.exports =route; 

