const fs = require('fs').promises;

module.exports = (route) => fs.readFile(route,'utf8'); 