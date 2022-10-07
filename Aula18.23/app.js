const filme = {
    espectadores:[],
    adicionarEspectador(nome,idade,opiniao){
        const espectador = {
            nome, idade, opiniao
        }
        this.espectadores.push(espectador)
    },
    mediaIdadeOtimo(){
        let idade = 0;
        let opiniao = 0;
        for(i = 0; i < this.espectadores.length; i++){
            const espectador = this.espectadores[i];
            if (espectador.opiniao === 3){
                opiniao++;
                idade += espectador.idade;
            };
        };
        let media = idade/opiniao;
        console.log(`A média da idade dos que opinaram em ótimo é de: ${media}`)
    }
}

filme.adicionarEspectador('Helter',23,3);
filme.adicionarEspectador('Jamile',39,3);
filme.adicionarEspectador('Kauê',17,1);
filme.adicionarEspectador('Juciele',18,2);
filme.adicionarEspectador('José',46,2);
filme.adicionarEspectador('Daniel',25,2);
filme.adicionarEspectador('Rafaela',36,1);
console.log(filme.espectadores);
filme.mediaIdadeOtimo();