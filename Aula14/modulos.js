const fs = require('fs');

let lerDados = fs.readFileSync(__dirname + '/arquivo.txt', 'utf8');

let escreva = fs.writeFileSync('arquivo.txt', 'Testanto o acréscimo de outras funções do módulo.')

let filme = {
    nome:'',
    genero:'',
    classificacao:''
};

let lerFilmes = JSON.stringify(filme);
let guardarFilmes = fs.writeFileSync('O filme', lerFilmes);

let acrescimo = fs.appendFileSync('arquivo.txt','Vendo mais adições')

console.log(escreva);
console.log(lerDados);
console.log(guardarFilmes);
console.log(acrescimo);