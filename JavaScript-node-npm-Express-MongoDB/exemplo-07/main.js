const axios = require('axios'); 

axios('http://economia.awesomeapi.com.br/json/last/USD-BRL')
.then( resolv => console.log(resolv.data))
.catch(error => console.log(error))