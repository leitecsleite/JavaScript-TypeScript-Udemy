const path = require('path'); //CommonJS

module.exports = {
    mode: 'development', // desenvolvimento 
    entry: './src/index.js', //arquivo  de entrada 
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename:'bundle.js'
     },//saida para o bundle (pasta)
     module: {
         rules: [{
             exclude: /node_modules/,   //excluir páginas para o webpack não formatar. 
             test:/\.js$/, // qual o arquivo vc vai análisar. 
             use: {
                 loader: 'babel-loader',
                 options:{
                     presets: ['@babel/env']
                 }
             }
         }]
     }, 
     devtool: 'source-map',// mapear o error no arquivo. 
};