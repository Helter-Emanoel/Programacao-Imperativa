function soma(nu1, nu2) {
  return nu1 * nu2;
}

const total = soma(5, 6);
console.log(total);

function imc(nome, sobrenome, idade, peso = 0, altura = 0) {
  const valorIMC = peso/(altura**2)
  return `${nome} ${sobrenome} tem ${idade} anos e seu IMC é ${valorIMC.toFixed(2)}`
}

const mens = imc("Helter", "Emanoel", 23, 100.0, 1.78);
console.log(mens);

const mens1 = imc("Jamile", "Soares", 39, 80.0, 1.68);
console.log(mens1);
