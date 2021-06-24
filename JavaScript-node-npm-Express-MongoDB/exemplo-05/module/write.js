const fs = require('fs').promises; 

module.exports =(route, data) => {
    fs.writeFile(route, data , {
        flag: 'w'
    } )
}