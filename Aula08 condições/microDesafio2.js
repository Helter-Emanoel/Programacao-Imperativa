function podeSubir(altura, acompanhado) {
  if (altura >= 1.4 && altura <= 2.0) {
    console.log("Pode subir.");
  } else if (altura < 1.4 && acompanhado) {
    console.log("Pode subir, pois está acompanhado.");
  } else if (altura < 1.2) {
    console.log("Você não pode subir nem acompanhado");
  } else {
    console.log("Não pode subir");
  }
}

console.log(podeSubir(1.65));
