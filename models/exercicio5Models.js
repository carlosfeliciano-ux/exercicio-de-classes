class Pessoa {
    constructor(nome,cpf){
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Aluno extends Pessoa {
    constructor(nome,cpf,dtCadastro){
        super(nome, cpf);
        this.dtCadastro = dtCadastro;
    }
}

class Administrador extends Pessoa {
    constructor(nome,cpf,setor){
        super(nome, cpf);
        this.setor = setor;
    }
}

class Instrutor extends Pessoa {
    constructor(nome,cpf,especialidade){
        super(nome,cpf);
        this.especialidade = especialidade;
    }
}

class Curso {
    constructor(nome,descricao,preco,duracao){
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.duracao = duracao;
    }
}

class Modulo {
    constructor(titulo,descricao,ordem,){
        this.titulo = titulo;
        this.descricao = descricao;
        this.ordem = ordem;
    }
}

class Aula {
    constructor(disciplina,duracao,conteudo){
        this.disciplina = disciplina;
        this.duracao = duracao;
        this.conteudo = conteudo;
    }
}

const dados = {
    alunos: [
        new Aluno("Carlos", "123.456.789-00", "01/01/2023"),
        new Aluno("João", "987.654.321-00", "02/02/2023")
    ],

    adms: [
        new Administrador("Maria", "111.222.333-44", "Financeiro")
    ],

    instrut: [
        new Instrutor("José", "555.666.777-88", "Programação")
    ],

    cursin:[
        new Curso("JavaScript", "Curso de JavaScript", 1000, "3 meses")
    ],

    modulo: [
        new Modulo("Introdução ao JavaScript", "Aprenda os conceitos básicos do JavaScript", 1)
    ],

    aula: [
        new Aula("Variáveis e Tipos de Dados", "2 horas", "Aprenda sobre variáveis e tipos de dados em JavaScript")
    ]

}
//Exibir tudo dentro de dados
console.log(dados);