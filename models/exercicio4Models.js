class Funcionario {
    constructor(nome, cpf, matricula, salario) {
        this.nome = nome;
        this.cpf = cpf;
        this.matricula = matricula;
        this.salario = salario;
    }
}

class Vendedor extends Funcionario {
    constructor(nome, cpf, matricula, salario, metaVendas) {
        super(nome, cpf, matricula, salario);
        this.metaVendas = metaVendas;
    }
}

class Gerente extends Funcionario {
    constructor(nome, cpf, matricula, salario, setorResponsavel) {
        super(nome, cpf, matricula, salario);
        this.setorResponsavel = setorResponsavel;
    }
}

class Pedido {
    constructor(numero, data, status) {
        this.numero = numero;
        this.data = data;
        this.status = status;
    }
}

class Pagamento {
    constructor(valor, data, formaDePagamento) {
        this.valor = valor;
        this.data = data;
        this.formaDePagamento = formaDePagamento;
    }
}

class itemPedido {
    constructor(quantidade) {
        this.quantidade = quantidade;
    }
}

class Produto {
    constructor(nome, descricao, preco) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
    }
}

class Cliente {
    constructor(nome, cpf, email, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
    }
}

dados = [
    vendedores: [
        new Vendedores("João", "123.456.789-00", "V001", 2000, 5000),
        new Vendedores("Maria", "987.654.321-00", "V002", 2500, 6000),
    ],

    gerentes: [
        new Gerentes("Carlos", "111.222.333-44", "G001", 3000, "Vendas"),
    ],

    pedidos: [],

    produtos: [
        
    ]
]