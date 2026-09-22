class Funcionario {
    constructor(nome, cpf, matricula, salario) {
        this.nome = nome;
        this.cpf = cpf;
        this.matricula = matricula; // PK
        this.salario = salario;
    }
}

class Vendedor extends Funcionario {
    constructor(nome, cpf, matricula, salario, metaVendas) {
        super(nome, cpf, matricula, salario);
        this.metaVendas = metaVendas;
    }
    // matricula também funciona como PK/FK para Funcionario
}

class Gerente extends Funcionario {
    constructor(nome, cpf, matricula, salario, setorResponsavel) {
        super(nome, cpf, matricula, salario);
        this.setorResponsavel = setorResponsavel;
    }
    // matricula também funciona como PK/FK para Funcionario
}

class Cliente {
    constructor(id_cliente, nome, cpf, email, telefone) {
        this.id_cliente = id_cliente; // PK
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
    }
}

class Pedido {
    constructor(numero, data, status, id_cliente, matricula_vendedor) {
        this.numero = numero; // PK
        this.data = data;
        this.status = status;
        this.id_cliente = id_cliente; // FK -> Cliente.id_cliente
        this.matricula_vendedor = matricula_vendedor; // FK -> Vendedor.matricula
    }
}

class Pagamento {
    constructor(valor, data, formaDePagamento) {
        this.valor = valor;
        this.data = data;
        this.formaDePagamento = formaDePagamento;
        // A estrutura de pagamento foi mantida como estava, conforme combinado.
    }
}

class ItemPedido {
    constructor(numero_pedido, id_produto, quantidade) {
        this.numero_pedido = numero_pedido; // FK -> Pedido.numero
        this.id_produto = id_produto; // FK -> Produto.id_produto
        this.quantidade = quantidade;
    }
    // PK composta: numero_pedido + id_produto
}

class Produto {
    constructor(id_produto, nome, descricao, preco) {
        this.id_produto = id_produto; // PK
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
    }
}

const dados = {
    vendedores: [
        new Vendedor("João", "123.456.789-00", "V001", 2000, 5000),
        new Vendedor("Maria", "987.654.321-00", "V002", 2500, 6000),
    ],

    gerentes: [
        new Gerente("Carlos", "111.222.333-44", "G001", 3000, "Vendas"),
    ],

    clientes: [
        new Cliente(1, "Lucas", "000.111.222-33", "lucas@email.com", "999999999"),
        new Cliente(2, "Fernanda", "444.555.666-77", "fernanda@email.com", "988888888")
    ],

    pedidos: [],

    produtos: [
        new Produto(1, "Notebook", "Notebook para uso profissional", 3500),
        new Produto(2, "Mouse", "Mouse sem fio", 120)
    ],

    itensPedido: []
};