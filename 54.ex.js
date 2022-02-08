function retornaSeHaEcoNoEstudio(distancia) { 
    const velocidadeDoSom = 340
    const tempoEco = Math.ceil(distancia / velocidadeDoSom)
    console.log(tempoEco)
    if(tempoEco >= 0.1){
      return true
    } else {
      return false
    }
 } 
 
 const existeAlgumEco = retornaSeHaEcoNoEstudio(20)
 console.log(existeAlgumEco)

