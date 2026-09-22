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
        this.pedidos = [];
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

class Produto {
    constructor(id_produto, nome, preco) {
        this.id_produto = id_produto; // PK
        this.nome = nome;
        this.preco = preco;
    }
}

class Pedido {
    constructor(data, numero, garcom, mesa, cliente) {
        this.data = data;
        this.numero = numero; // PK
        this.valorTotal = 0;
        this.garcom = garcom; // FK -> Funcionario.matricula (Garcom)
        this.mesa = mesa; // FK -> Mesa.numero
        this.cliente = cliente; // FK -> Cliente.cpf
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
    constructor(numero_pedido, id_produto, quantidade, preco) {
        this.numero_pedido = numero_pedido; // FK -> Pedido.numero
        this.id_produto = id_produto; // FK -> Produto.id_produto
        this.quantidade = quantidade;
        this.preco = preco;
    }
    // PK composta: numero_pedido + id_produto
}

const dados = {
    garcons: [
        new Garcom("João", "123.456.789-00", "G001"),
        new Garcom("Ana", "987.654.321-00", "G002")
    ],
    cozinheiros: [
        new Cozinheiro("Carlos", "111.222.333-44", "C001"),
        new Cozinheiro("Mariana", "555.666.777-88", "C002")
    ],
    mesas: [
        new Mesa(1, 4, "Área interna"),
        new Mesa(2, 2, "Área externa")
    ],
    clientes: [
        new Cliente("Lucas", "000.111.222-33", "9937654569"),
        new Cliente("Fernanda", "444.555.666-77", "9937654568")
    ],
    produtos: [
        new Produto(1, "Hambúrguer", 15.0),
        new Produto(2, "Suco", 25.0)
    ],
    pedidos: []
};

const pedido1 = new Pedido(
    "2026-09-15",
    1,
    dados.garcons[1],
    dados.mesas[0],
    dados.clientes[1]
);

const item1 = new ItemPedido(1, dados.produtos[0].id_produto, 2, dados.produtos[0].preco);
const item2 = new ItemPedido(1, dados.produtos[1].id_produto, 1, dados.produtos[1].preco);

pedido1.adicionarItem(item1);
pedido1.adicionarItem(item2);

dados.pedidos.push(pedido1);

console.log("Models carregados com sucesso!");
console.log("Classes disponíveis: Funcionario, Garcom, Cozinheiro, Mesa, Cliente, Produto, Pedido, ItemPedido");

console.dir(dados, { depth: 10 });