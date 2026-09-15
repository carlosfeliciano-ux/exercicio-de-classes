class Funcionario {
    constructor(nome, cpf, matricula) {
        this.nome = nome;
        this.cpf = cpf;
        this.matricula = matricula;
    }
}

class Garcom extends Funcionario {
    constructor(nome, cpf, matricula) {
        super(nome, cpf, matricula);
        this.pedidos = [];
    }

    servir() { }

    adicionarPedido(pedido) {
        this.pedidos.push(pedido);
    }
}

class Cozinheiro extends Funcionario {
    constructor(nome, cpf, matricula) {
        super(nome, cpf, matricula);
    }

    cozinhar() { }
}

class Mesa {
    constructor(numero, capacidade, localizacao) {
        this.numero = numero;
        this.capacidade = capacidade;
        this.localizacao = localizacao;

    }

    adicionarPedido(pedido) {
        this.pedidos.push(pedido);
    }
}

class Cliente {
    constructor(nome, cpf, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.pedidos = [];
    }

    adicionarPedido(pedido) {
        this.pedidos.push(pedido);
    }
}

class Pedido {
    constructor(data, numero, garcom, cliente) {
        this.data = data;
        this.numero = numero;
        this.valorTotal = 0;
        this.garcom = garcom;
        this.cliente = cliente;
        this.itens = [];

        garcom.adicionarPedido(this);
        mesa.adicionarPedido(this);
        cliente.adicionarPedido(this);
    }

    adicionarItem(item) {
        this.itens.push(item);
        this.calcularValorTotal();
    }

    calcularValorTotal() {
        this.valorTotal = this.itens.reduce(
            (total, item) => total + item.quantidade * item.preco,
            0
        );
    }
}

class ItemPedido {
    constructor(quantidade, preco) {
        this.quantidade = quantidade;
        this.preco = preco;
    }
}

const dados = {
    garcons: [
        new Garcom("João", "123.456.789-00", "G001"),
        new Garcom("Ana", "987.654.321-00", "G002")
    ], //a variavel "garcons" é um array que armazena objetos da classe Garcom, que está dentro de dados, 
    // que é um objeto que armazena os dados do sistema. Cada objeto da classe Garcom possui
    // as propriedades nome, cpf e matricula, que são passadas como parâmetros no momento da criação do objeto. 
    // A variável "garcons" é inicializada com dois objetos da classe Garcom, representando dois garçons diferentes.
    cozinheiros: [
        new Cozinheiro("Carlos", "111.222.333-44", "C001"),
        new Cozinheiro("Mariana", "555.666.777-88", "C002")
    ], //Mesma coisa para os outros arrays, mas com a classe Cozinheiro, que possui as mesmas propriedades da classe Garcom.
    mesas: [
        new Mesa(1, 4, "Área interna"),
        new Mesa(2, 2, "Área externa")
    ],
    clientes: [
        new Cliente("Lucas", "000.111.222-33", "9937654569"),
        new Cliente("Fernanda", "444.555.666-77", "9937654568")
    ],
    pedidos: []
};


const pedido1 = new Pedido("2026-09-15", 1, dados.garcons[1], dados.mesas[0], dados.clientes[1]);
const item1 = new ItemPedido(2, 15.0);
const item2 = new ItemPedido(1, 25.0);
pedido1.adicionarItem(item1);
pedido1.adicionarItem(item2);
// Adiciona o pedido ao array de pedidos do garçom, 
// da mesa e do cliente

dados.pedidos.push(pedido1);
// Adiciona o pedido ao array de pedidos do sistema

console.log("Models carregados com sucesso!");
console.log("Classes disponíveis: Funcionario, Garcom, Cozinheiro, Mesa, Cliente, Pedido, ItemPedido");

console.dir(dados, { depth: 10 });