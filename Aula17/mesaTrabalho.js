const grupo = {
    pessoas:[],
    adicionarPessoa(nome,altura,sexo){
        const pessoa = {
            nome, altura, sexo
        };
        this.pessoas.push(pessoa)
    },
    maiorMenorAltura(){
        let maior = this.pessoas[0];
        let menor = this.pessoas[0];
        for(i = 1; i < this.pessoas.length; i++){
            const pessoa = this.pessoas[i];
            if (pessoa.altura < menor.altura) {
                menor = pessoa;           
            };
            if (pessoa.altura > maior.altura) {
                maior = pessoa;
            };
        };

        console.log(`Maior altura: ${maior.altura} e menor altura: ${menor.altura}`);
        },

    mediaMulheres(){
            let soma = 0;
            let qtdMulheres = 0;
            for(i = 0; i < this.pessoas.length; i++){
                const pessoa = this.pessoas[i];
                
                if (pessoa.sexo == 'F'){
                    qtdMulheres++;
                    soma += pessoa.altura;
                };
            };

            let media = soma/qtdMulheres;
            console.log(`A média da altura das mulheres é de: ${media.toFixed(2)}`);
        }
};

grupo.adicionarPessoa('Helter',1.78,'M');
grupo.adicionarPessoa('Jamile',1.68,'F');
grupo.adicionarPessoa('Kauê',1.82,'M');
grupo.adicionarPessoa('Juciele',1.65,'F');
console.table(grupo.pessoas);
grupo.maiorMenorAltura();
grupo.mediaMulheres();