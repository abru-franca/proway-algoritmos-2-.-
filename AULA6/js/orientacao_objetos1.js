console.log("deu certo");


// aluno
//atributos= variaveis (5)
//nome  string
//idade number
//matricula
//senha
//nota  number
//
//metodos = funcoes sem o comando function
// conversar (ouviu) ---> return resposta
//responderChamada(professor) ----> "professor,MEU_NOME presente"
//meApresentar()  ---> "Oi meu nome é NOME tenho XX anos minha matricula é XXXX"


class Aluno {
    nome
    idade
    matricula
    senha
    nota

    //declaração do construtor que sera chamado de forma esterna 
    //para criar um OBJETO de classe Aluno
    constructor(nome, idade, matricula, senha, nota) {
        //passando o valor dos meus parametros para os meus atributos
        this.nome = nome
        this.idade = idade
        this.matricula = matricula
        this.senha = senha
        this.nota = nota


    }
    conversar(ouviu) {
        return ouviu + ",humm interessante"

    }
    chamarProfessor(mensagem) {
        return "ja resolveu era isso (" +mensagem+")"
    
    }
    meApresentar(){
        return "ola meu nome é"+this.nome+"tenho"
        +this.idade+"anos,matricula="+this.matricula+"prefiro n dizer minha senha"
    }
}



let nome = "bruna"

let aluno1 = new Aluno("bruna frança", 17, "111", "1234**111", 9)

let alunoX = new Aluno("miranha", 22, "miranha2", "obsborn123", 11)



console.log(aluno1);
console.log(aluno1.nome);
console.log(aluno1.matricula);

console.log(alunoX.senha);

aluno1.nome = "XXX"
console.log(aluno1);

alunoX.nome = "outro nome"
alunoX.idade = 16
alunoX.matricula = "111"
alunoX.senha = "132"
alunoX.nota = 1

console.log(alunoX);
console.log(alunoX.idade);

let colega = new Aluno("Everton", 36, "71551", 10)
console.log(colega);
colega.matricula = "ever71551"
console.log(colega);

console.log(aluno1.conversar("sobre o filme do miranha"));

document.write(aluno1.conversar("sobre o filme do miranha"))

let resposta = aluno1.conversar("sobre o filme do miranha")

console.log(resposta);

console.log(alunoX.conversar("nada a dizer"));


//como eu crio um objeto de classe Aluno?
//instanciando um objeto da classe aluno com os valores dos atributos np constructor
let aluno10 = new Aluno("derik", 20, "90909", "eusouderik", 2)

//como eu acesso cada atributo do objeto?(ver no minimo 3)

console.log("ola meu nome é" + aluno10.nome);
document.writeln("oi tenho" + aluno10.idade + "anos");

//como eu atualizo o atributo de um objeto

aluno10.nome = "luiz"
aluno10.idade = 14
aluno10.senha = 1234
console.log(aluno10)

//executando metodos de um objeto da classe Aluno 
console.log(aluno10.conversar("aprendi orientaçao a objetos"));

console.log(aluno10.chamarProfessor("erro na linha 64"));

console.log(aluno1.meApresentar() );

console.log(aluno10.meApresentar() );
