class Pessoa {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Usuario extends Pessoa {
    constructor(nome, cpf, matricula) {
        super(nome, cpf);
        this.matricula = matricula;
    }
}

class Emprestimo {
    constructor(dtEmprestimo, dtDevolucao, usuario, livro) {
        this.dtDevolucao = dtDevolucao;
        this.dtEmprestimo = dtEmprestimo;
        this.usuario = usuario;
        this.livro = livro;
    }
}

class Funcionario extends Pessoa {
    constructor(nome, cpf, matriculaFuncional, cargo) {
        super(nome, cpf);
        this.matriculaFuncional = matriculaFuncional;
        this.cargo = cargo;
    }
}

class Livro {
    constructor(id_livro, isbn, ano_publicacao, titulo) {
        this.id_livro = id_livro;
        this.isbn = isbn;
        this.ano_publicacao = ano_publicacao;
        this.titulo = titulo;
    }

    cadastrar() { }
    buscarPorID() { }
    atualizar() { }
    deletar() { }
}

const carlos = new Usuario('Carlos', '123321-2', '9846');
const josi = new Funcionario('Josué', '1234321-1', '9849', 'Professor');
const luzes = new Livro(1, 1234, '18/10/2008', 'Luzes do luar');
const emprestimo1 = new Emprestimo('08/09/2026', '15/09/2026', carlos, luzes);

console.log("ALUNO");
console.log(`Nome do aluno: ${carlos.nome}
    CPF do aluno: ${carlos.cpf}
    Matricula do aluno: ${carlos.matricula}`);
console.log('FUNCIONARIO');
console.log(`Nome do funcionário: ${josi.nome} 
    CPF do funcionário: ${josi.cpf} 
    Matricula do funcionário ${josi.matriculaFuncional} 
    Cargo do funcionário: ${josi.cargo}`);
console.log("LIVRO");
console.log(`Id do livro: ${luzes.id_livro}
    ISBN livro: ${luzes.isbn}
    data de lançamento ${luzes.ano_publicacao}
    Titulo do livro: ${luzes.titulo}`);
console.log('EMPRESTIMO');
console.log(`Data de empréstimo: ${emprestimo1.dtEmprestimo}
    Data de devolução: ${emprestimo1.dtDevolucao}
    Aluno que foi emprestado: ${emprestimo1.usuario.nome}
    Livro emprestado: ${emprestimo1.livro.titulo}`);