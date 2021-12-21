
//criar uma classe Professor com os atributos
//nome string
//idade number
//qtdAlunos number

//metodos 
//fazerChamada que recebe por parametro o nome do aluno e retorna (presença verificada)
//calculaMedia receb 3 notas e devolve a media 

//apos criar a classe instanciar 1 objeto da classe Professor para atribuir os valores
//utilizar os metodos do professor


class Professor {
    nome
    idade
    qtdAlunos

    constructor(nome, idade, qtdAlunos) {

        this.nome = nome
        this.idade = idade
        this.qtdAlunos = qtdAlunos

    }

    fazerChamada(nomeAluno) {
        return "presença verificada" +nomeAluno+ "marcado na lista"

    }
    calcularMedia(nota1,nota2,nota3){
        return (nota1+nota2+nota3)/3


    }
}




let professor1= new Professor("fulano",46,30)
professor1.qtdAlunos=20

console.log(professor1.fazerChamada("ciclaninho") );

let media=professor1.calcularMedia(6,8,7,)
console.log(media);

//instanciem outro professor e utilizem seus atributos e seus metodos 

let professor2= new Professor("Aluno de mestrado",30,18)
console.log(professor2.nome);
console.log(professor2.idade);
console.log(professor2.qtdAlunos);
console.log("qtd DEPOIS"+professor2.qtdAlunos);

professor2.nome=18
console.log(professor2.qtdAlunos);

console.log(professor2.fazerChamada("fulaninho"));
console.log(professor2.fazerChamada("outro cara ai"));

console.log(professor2.calcularMedia(7,7,7,));
console.log(professor2.calcularMedia(8,8,8));