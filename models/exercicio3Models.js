class Pessoa {
    constructor(nome, cpf, email, dtnasc) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.dtnasc = dtnasc;
    }
}

class Aluno extends Pessoa {
    constructor(nome, cpf, email, dtnasc, matricula) {
        super(nome, cpf, email, dtnasc);
        this.matricula = matricula;
    }
    cadastrar() { }
    buscarPorID() { }
    atualizar() { }
    deletar() { }
}

class Professor extends Pessoa {
    constructor(nome, cpf, email, dtnasc, matriculaFunc) {
        super(nome, cpf, email, dtnasc);
        this.matriculaFunc = matriculaFunc;
    }
}

class Turma {
    constructor(id_sala,sala,aluno,professor,termo,disciplina) {
        this.id_sala = id_sala;
        this.sala = sala;
        this.aluno = aluno;
        this.professor = professor;
        this.termo = termo;
        this.disciplina = disciplina;
    }

    adicionarAluno(aluno) {
        this.aluno = aluno;
        return `Aluno: ${this.aluno.nome} foi adicionado`;
    }
}

class Disciplina{
    constructor(nome,codigo,cargaHora, professor){
        this.nome = nome;
        this.codigo = codigo;
        this.cargaHora = cargaHora;
        this.professor = professor;
    }
}

new Professor("Josué", "111.222.333-44", "josue.rosario@yahoo.com", "10/02/1980", "2023001"),
new Professor("Vinicius", "555.666.777-88", "vinicius.simoes@gmial.com", "20/10/1985")

const professorJosue = new Professor(
    "Josue", "111.222.333-44", "josue.rosario@yahoo.com", "10/02/1980", "2023001"
);

const professorVinicius = new Professor(
    "Vinicius", "555.666.777-88", "vinicius.simoes@gmail.com", "20/10/1985", "2023002"
);

const dados = {
    alunos: [
        new Aluno("Carlos", "123.456.789-00", "carlos.alves@supahotmal.com", "27/10/2008", "2023001"),
        new Aluno("Maria", "987.654.321-00", "maria.sapat@yahoo.com", "15/05/2007", "20230234")
        ],
    
    professores: [
        professorJosue,
        professorVinicius
    ],

    materias: [
        new Disciplina("Matematica", "MAT101", 60, professorJosue),
        new Disciplina("Portugues", "POR102", 45, professorVinicius)
    ]
}



console.log(`Testando a classe disciplina: ${dados.materias[0].nome} - ${dados.materias[0].codigo} - ${dados.materias[0].cargaHora} - Professor: ${dados.materias[0].professor.nome}`);
console.log(`Testando a classe disciplina: ${dados.materias[1].nome} - ${dados.materias[1].codigo} - ${dados.materias[1].cargaHora} - Professor: ${dados.materias[1].professor.nome}`);
console.log(`Testando a classe aluno: ${dados.alunos[0].nome} - ${dados.alunos[0].cpf} - ${dados.alunos[0].email} - ${dados.alunos[0].dtnasc} - ${dados.alunos[0].matricula}`);
console.log(`Testando a classe aluno: ${dados.alunos[1].nome} - ${dados.alunos[1].cpf} - ${dados.alunos[1].email} - ${dados.alunos[1].dtnasc} - ${dados.alunos[1].matricula}`);