let listaNumero = [1,2,3,4,5,6];

        // Método Map
let dobroListaNumero = listaNumero.map((valor,index) => {
    return valor * 2;
});
console.table(dobroListaNumero);

        // Método filter
let listaNumeroFilter = listaNumero.filter((valor,index) => {
    return valor > 4;
})
console.table(listaNumeroFilter)

        // Método reduce
let operacao = listaNumero.reduce((resultado,valor) => {
    return resultado * valor;
    });
console.log(operacao);

        // Método forEach
listaNumero.forEach((valor,index) => console.log('O valor é: ' + valor + ' e sua posição é: ' + index))