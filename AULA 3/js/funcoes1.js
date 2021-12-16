console.log("deu certo");

// meApresentar() // chamada de funçao

let nome = capturaTexto("informe seu nome")  //usando a funçao captura texto passando o parametro frase
let idade = capturaNumeroEspecial("informe sua idade") //
let anoAtual =capturaNumeroEspecial("informe o ano atual")
let cidade= capturaTexto("informe sua cidade")

console.log(" meu nome é "+nome+" idade é "+idade+" estamos no ano de "+anoAtual+"estou em"+cidade);

console.log("quero saber o retorno dessa função"+retorneInteiro());



//declaraçao da funçao
//palavra reservada
//tem nome da funçao
//() gaveta de parametros
//{} escopo tudo que será executado
//conteudo que eu quero executar

function meApresentar() {
   
    let nome ="bruna"
    let idade = 17
    
    console.log("oi meu nome é "+nome+" tenho "+idade+" anos ");
}

function retornoSimples(){
    return "ta aqui oq vc precisa"
}

function retorneInteiro(){
    return 10

}

function capturaTexto(texto){ // quando eu chamo essa funçao devo informar um valor para esse parametro
    let temporario =prompt("texto")
    return temporario
}

//nao preciso passar parametro pois não tem
function capturaNumero(){
    let temporario= Number ( prompt("informe um numero"))
    return temporario
}


//essa funçao recebe parametro onde a funçao captura numero nao recebia 
//dessa forma a funçao se torna dinamica pois é parametrizavel
function capturaNumeroEspecial(frase){  
    let temporario= Number(prompt(frase))
    return temporario
}
