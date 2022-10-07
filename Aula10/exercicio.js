let listaCompra = ["arroz", "feijão", "sal", "açúcar", "café."];

let join = listaCompra.join(" - ");
console.log(
  join,
  "O join junta os itens da array separados pelo separador que damos."
);

let pop = listaCompra.pop();
console.log(pop, "O pop remove o último elemento, no caso foi o 'café'.");

let push = listaCompra.push("café", "leite em pó.");
console.log(
  push,
  "O push adiona um ou mais elementos, no caso o 'café e o leite em pó.'"
);

let shift = listaCompra.shift();
console.log(shift, "O shift remove o primeiro elemento, no caso foi o 'arroz'");

let unshift = listaCompra.unshift("Farinha", "arroz");
console.log(
  unshift,
  "O unshift adiciona um ou mais elementos, no caso 'a farinha e o arroz'."
);
console.log(listaCompra);
