function rand(min, max){
    min*= 1000; 
    max *= 1000; 

    return Math.floor(Math.random()*(max-min) + min); 
}


function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof msg !== 'string'){
                reject('CAI NO ERRO')
                return
            }
            resolve(msg.toLocaleUpperCase() +'-Passei na promise'); 
            return; 
        }, tempo)
    })
}

async function executa(){
    try{
        const fase1 = await esperaAi('fase 2', rand(1,3))
        console.log(fase1)
        
        const fase2 = await esperaAi('fase 3', rand(1, 2)); 
        console.log(fase2)

    } catch (e){
        console.log(e)
    }
}

executa(); 