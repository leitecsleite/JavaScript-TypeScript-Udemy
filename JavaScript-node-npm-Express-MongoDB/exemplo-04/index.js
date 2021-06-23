const fs = require('fs').promises; 
const path = require('path'); 

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname); 
    const files = await fs.readdir(rootDir);
    walke(files, rootDir);  
}

async function walke(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir,file); 
        const stats = await fs.stat(fileFullPath); 
        
        if(/\.git/g.test(fileFullPath)) continue; 
        if(/node_module/g.test(fileFullPath)) continue; 
        if(/express/g.test(fileFullPath)) continue; 
        


        if (stats.isDirectory ()){
            readdir(fileFullPath); 
            continue; 
        } 

       
        console.log(fileFullPath);
    }
}

readdir('../')














//fs.readdir(path.resolve(__dirname))
//  .then(files => console.log(files))
//   .catch(e => console.log(e))
