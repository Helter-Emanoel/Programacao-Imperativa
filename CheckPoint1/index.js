let pipoca = "10 segundos";
let macarrao = "08 segundos";
let carne = "15 segundos";
let feijao = "12 segundos";
let brigadeiro = "08 segundos";

function microondas(opcao, tempo) {
  if (opcao == pipoca && tempo == "10 segundos") {
    console.log("Pipoca pronta, bom apetite!!!");
  } else if (
    opcao == pipoca &&
    tempo > "10 segundos" &&
    tempo <= "20 segundos"
  ) {
    console.log("Pipoca queimou.");
  } else if (opcao == pipoca && tempo > "20 segundos") {
    console.log("Pipoca kabumm");
  } else if (opcao == pipoca && tempo < "10 segundos") {
    console.log("Tempo insuficiente para a Pipoca");
  } else if (opcao == macarrao && tempo == "08 segundos") {
    console.log("Macarrão pronto, bom apetite!!!");
  } else if (
    opcao == macarrao &&
    tempo > "08 segundos" &&
    tempo <= "16 segundos"
  ) {
    console.log("Macarrão queimou.");
  } else if (opcao == macarrao && tempo > "16 segundos") {
    console.log("Macarrão kabumm");
  } else if (opcao == macarrao && tempo < "08 segundos") {
    console.log("Tempo insuficiente para o Macarrão");
  } else if (opcao == carne && tempo == "15 segundos") {
    console.log("Carne pronto, bom apetite!!!");
  } else if (
    opcao == carne &&
    tempo > "15 segundos" &&
    tempo <= "30 segundos"
  ) {
    console.log("Carne queimou.");
  } else if (opcao == carne && tempo > "30 segundos") {
    console.log("Carne kabumm");
  } else if (opcao == carne && tempo < "15 segundos") {
    console.log("Tempo insuficiente para a Carne");
  } else if (opcao == feijao && tempo == "12 segundos") {
    console.log("Feijão pronto, bom apetite!!!");
  } else if (
    opcao == feijao &&
    tempo > "12 segundos" &&
    tempo <= "24 segundos"
  ) {
    console.log("Feijão queimou.");
  } else if (opcao == feijao && tempo > "24 segundos") {
    console.log("Feijão kabumm");
  } else if (opcao == feijao && tempo < "12 segundos") {
    console.log("Tempo insuficiente para o Feijão");
  } else if (opcao == brigadeiro && tempo == "08 segundos") {
    console.log("Brigadeiro pronto, bom apetite!!!");
  } else if (
    opcao == brigadeiro &&
    tempo > "08 segundos" &&
    tempo <= "16 segundos"
  ) {
    console.log("Brigadeiro queimou.");
  } else if (opcao == brigadeiro && tempo > "16 segundos") {
    console.log("Brigadeiro kabumm");
  } else if (opcao == brigadeiro && tempo < "08 segundos") {
    console.log("Tempo insuficiente para o Brigadeiro");
  }
  return;
}

console.log(microondas(pipoca, "09 segundos"));
