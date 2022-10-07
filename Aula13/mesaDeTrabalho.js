const banco = {
    cliente:[],
    adicionarCliente(titular,numero,tipo,saldo){
        const inserirCliente = {titular, numero, tipo, saldo};
        this.cliente.push(inserirCliente);
    },
    consultarCliente(nome, encontrarCliente){
        return nome.find(procurarCliente => procurarCliente.nome === encontrarCliente)
    },
    
    // deposito(titular,valor){
    //     titular = this.cliente.length;
    //     if (titular != '' || titular == ''){

    //     }
    // }
}

banco.adicionarCliente('Abigael Natte',5486273622,'Conta Corrente',27771);
banco.adicionarCliente('Ramon Connell',1183971869,'Conta Poupança',8675);
banco.adicionarCliente('Jarret Lafuente',9582019689,'Conta Poupança',27363);
banco.adicionarCliente('Ansel Ardley',1761924656,'Conta Poupança',32415);
banco.adicionarCliente('Jacki Shurmer',7401971607,'Conta Poupança',18789);
banco.adicionarCliente('Jobi Mawtus',630841470,'Conta Corrente',28776);
banco.adicionarCliente('Thomasin Latour',4223508636,'Conta Corrente',2177);
banco.adicionarCliente('Lonnie Verheijden',185979521,'Conta Poupança',25994);
banco.adicionarCliente('Alonso Wannan',3151956165,'Conta Corrente',7601);
banco.adicionarCliente('Bendite Huggett',2138105881,'Conta Poupança',33196);
console.table(banco.cliente);
banco.consultarCliente();

let procurarCliente = consultarCliente(cliente, 'Abigael')
console.log(procurarCliente);
