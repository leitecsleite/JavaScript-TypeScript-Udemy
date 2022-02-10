const express = require('express'); 

const serve =  express(); 

const url = 3000; 

serve.listen(url,()=>  console.log(`está rodando  http://localhost:${url}`));

//
serve.get(`/`, (requis, respons) => {
     respons.send('Hello word'); 
})