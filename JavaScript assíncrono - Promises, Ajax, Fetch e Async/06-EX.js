//Promise.resolve 


//usando o método estático Promise.resolve; 
Promise.resolve("Sucesss").then(function(value){
    console.log(value); //"Sucess"; 
}), function(value){
    //not called
}; 

//Resolvendo um array 

var p = Promise.resolve([1,2,3]);
p.then(function(v){
    console.log(v[0]); //1
});

//Resolvendo outra Promise

var original = Promise.resolve(true); 
var cast = Promise.resolve(original); 
cast.then(function(v){
    console.log(v)//true; 
})