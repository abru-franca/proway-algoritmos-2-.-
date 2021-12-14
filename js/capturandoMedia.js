/*
criae variaveis para o nome do aluno, as 3 notas e calcular a média

//podem usar 3 variaveis para as notas OU usar prepeticao para a quantidade de notas

*/

let nome="bruna de frança"  //variavel do tipo string

// let nota1= prompt ("informe a 1ª nota do aluno",+nome)
// let nota2= prompt ("informe a 2ª nota do aluno",+nome)
// let nota3= prompt ("informe a 3ª nota do aluno",+nome)

let media =( nota1 + nota2 + nota3) / 3


let qtNotas
let soma 
let soma 

qtNotas= number( 
    prompt("informa quantas notas deseja capturar") )
//variavel temporaria com meu ponto de partida
//condiçao de permanencia
//incremento
soma=0
    for(let contador=1;contador<=qtNotas;contador++){
nota= number(prompt("informe a "+contador+"ª nota do aluno"+nome) )
soma+=nota
}   
let media = (soma)/qtNotas

alert("media é",media);

    


if (media < 7) {

    alert("reprovado");
}else{
    alert("aprovado");
}