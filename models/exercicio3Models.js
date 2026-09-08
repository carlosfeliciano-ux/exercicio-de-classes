class Pessoa {
    constructor(nome, cpf, dtnasc) {
        this.nome = nome;
        this.cpf = cpf;
        this.dtnasc = dtnasc;
    }
}

class Aluno extends Pessoa {
    constructor(nome, cpf, dtnasc, matricula) {
        super(nome, cpf, dtnasc);
        this.matricula = matricula;
    }
    cadastrar() { }
    buscarPorID() { }
    atualizar() { }
    deletar() { }
}

class Professor extends Pessoa {
    constructor(nome, cpf, dtnasc, matriculaFunc) {
        super(nome, cpf, dtnasc);
        this.matriculaFunc = matriculaFunc;
    }
}

class Turma {
    constructor(id_sala,sala,aluno,professor,termo,disciplina) {
        this.id_sala = id_sala;
        this.sala = sala;
        this.aluno = adicionarAluno;
        this.professor = professor;
        this.termo = termo;
        this.disciplina = disciplina;
    }

    adicionarAluno(Pessoa.Aluno.matricula){
        return `Aluno: ${this.aluno.nome} foi adicionado`;
    }
}

class Disciplina{
    constructor(nome,codigo,cargaHora){
        this.nome = nome;
        this.codigo = codigo;
        this.cargaHora = cargaHora;
    }
}