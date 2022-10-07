let array = [1, 2, 3, 4, 5];

function mapReduce(array) {
  let soma = array.reduce((acumulador, valor) => acumulador + valor);
  let divisao = array.map((retorno) => retorno / soma);
  return divisao;
}
console.log(mapReduce(array));
