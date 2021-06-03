

//const request = obj => {
//    return new Promise((resolve, reject) => {
//        const xhr = new XMLHttpRequest();
//
//        xhr.open(obj.method, obj.url, true);
//        xhr.send();
//
//        xhr.addEventListener('load', () => {
//            if (xhr.status >= 200 && xhr.status < 300) {
//               resolve(xhr.responseText);
//            } else {
//                reject({
//                    code: xhr.status,
//                    msg: xhr.statusText
//                });
//            }
//        });
//    });
//};


document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

// async function carregaPagina(el) {
//    const href = el.getAttribute('href');
//    console.log(href);

//    const objConfig = {
//        method: 'GET', 
//        url: href, 
//    };  

//    try {
//    const  response = await request(objConfig);
//    carregaResultado(response);
//    } catch (e){
//        console.log(e); 
//    }

    //request(objConfig).then(response => {
    //    carregaResultado(response); 
    //}).catch(error => {
    //  console.log(error); 
   // })
//}




async  function carregaPagina(el){
    const href = el.getAttribute('href');
    const response = await fetch(href); 
    if(response.status !== 200) throw Error('ERRO 404!'); 
    const html = await response.text(); 
    carregaResultado(html);  
//    fetch(href)
//      .then(response => response.text())
//      .then(html => carregaResultado(html))
//      .catch(e => console.log(e)); 
}



function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
} 


//fetch('pagina1.html')
//  .then(resposta => {
//      if(resposta.status !== 200 )  throw new Error('Erro 404 NOSSO'); 
//      return resposta.text(); 
//  })
//  .then(html => console.log(html))
//  .catch(e => console.log(e)); 