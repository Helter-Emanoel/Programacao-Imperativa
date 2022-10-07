let numPar = [0,2,4,6,8,10];

// let numImpar = numPar.map((valor) => valor + 1);
// console.log(numImpar);

// let nomes = ['Maria Joaquina', 'Maria Madalena'];

// let nomesRetorno = nomes.filter((retorno) => retorno = 'Maria');
// console.log(nomesRetorno);

// let reduce = [1,2,3,4,5];

// let reduceRetorno = reduce.reduce((retorno,valor) => retorno += ' - ' + valor);
// console.log(reduceRetorno);

// let animais = ['Leão', [['Macaco']], 'Cachorro', 'Foca', 'Jabuti', 'Porco', 'Gato', 'Galinha', 'Avestruz', 'Peixe'];

// animais.forEach((nome, index) => console.log('O nome desse animal é: ' + nome));

let moedas = [
    {nome: 'Bitcoin', simbolo: 'BTC'},
    {nome: 'Bitcoin', simbolo: 'BTC'},
    {nome: 'Ethereum', simbolo: 'ETH'},
    {nome: 'Cardano', simbolo: 'ADA'},
];
moedas.find(function (moeda) {
    return moeda.nome === 'Bitcoin';
});