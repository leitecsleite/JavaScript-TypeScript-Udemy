// Setters e Getters customizados 
 /*
 O exemplo abaixo mostra como implementar um objeto auto-arquivável.
 Quando a propriedade temperature é atribuída, o array archive recebe uma
 nova entrada de log. 
 
 */

function Archiver(){
    var temperature = null; 
    var archive = [];
    
    
    Object.defineProperty(this, 'temperature',{
        get: function(){
            return temperature; 
        },
        
        set: function(value){
            temperature = value; 
            archive.push({val: temperature}); 
        }
    })
    this.getArchive = function(){return archive}; 
}

var arc = new Archiver(); 
arc.temperature; // get
arc.temperature = 11; 
arc.temperature =13; 
console.log(arc.getArchive()); 

//Imprimir: [ { val: 11 }, { val: 13 } ]