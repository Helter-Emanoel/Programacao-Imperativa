let participanteA = 5 + 8 + 4 + 9 + 5;
let participanteB = 8 + 7 + 8 + 6 + 8;
let participanteC = 7 + 5 + 10 + 8 + 3;

function pontuacaoMedia(part1,part2,part3) {
    let media1 = part1 / 5;
    let media2 = part2 / 5;
    let media3 = part3 / 5;
    let total = {media1, media2, media3}
    return total
};

function pontuacaoMaior(part1,part2,part3) {
    let maior1 = part1;
    let maior2 = part2;
    let maior3 = part3;
    let soma = {maior1, maior2, maior3}
    return soma
}

console.log(pontuacaoMedia(participanteA, participanteB, participanteC));
console.log(pontuacaoMaior(participanteA, participanteB, participanteC));

module.exports = pontuacaoMedia