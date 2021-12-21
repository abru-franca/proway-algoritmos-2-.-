//a classe pessoa agrega tudo que foi identificado como COMUM entre as classes Aluno,Professor...
class Pessoa {
    //basta repassar os parametros que vem no NEW para o constructor da SUPER CLASSE.
    nome
    idade
    altura
    salario

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.salario = salario
    }

}

class Diretor extends Pessoa {
    //esse atributo só existe na classe diretor
    //não preciso informar nome e idade novamente aqui
    qtdProfessores

    //o constructor tem objetivo de preencher os valores antes de gerar um objeto do tipo diretor
    //por isso preciso informar nome e idade no NEW porém devo rpassar esses valores para o constructor
    //da super classe ou CLASSE PAI
    constructor(nome, idade, qtdProfessores) {
        //os atributos herdados repasso para o contructot da SUPER CLASSE
        super(nome, idade)
        this.qtdProfessores = qtdProfessores

    }



}








class Aluno extends Pessoa {
    nome
    idade

    matricula

    constructor(nome, idade, matricula) {
        //para cada argumento incializado que o atributo do objeto 
        //o (this.) é utilizado para identificar que o atributo é do objeto
        //isso ajuda a não confundir parametro com atributo 
        super(nome, idade)
        this.matricula = matricula

    }

    meApresentar() {
        return "olá meu nome é" + this.nome + "tenho" + this.idade + "anos e minha matricula é" + this.matricula
    }

}


class Professor extends Pessoa {

    qtdAlunos


    constructor(nome, idade, qtdAlunos,altura,salario) {
        //o super deve ser chamado primeiro para garantir que a SUPER CLASSE faça o seu constructor primeiro  
        super(nome, idade,altura,salario)
        //depois inicializo meus atributos especificos da classe professor
        this.qtdAlunos = qtdAlunos


    }

    meApresentar() {
        return "oi meu nome é" + this.nome + "tenho" + this.idade + "anos, e tenho" + this.qtdAlunos + "alunos"

    }

}
let prof1 = new Professor("oliota", 32, 15,1.8,0)
console.log(prof1)
console.log(prof1.nome);
console.log(prof1.idade);
console.log(prof1.qtdAlunos);

let paulo = new Diretor("paulo y kano", 80, 30)
paulo.altura=1.5
paulo.salario=25000

console.log(paulo);