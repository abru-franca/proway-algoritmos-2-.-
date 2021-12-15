console.log("deu certo");

let nomes=[]  //criando um vetor sem itens

console.log(nomes)

//criando um vetor já com itens
let cursos=[
"Algoritmos 1",
"Algoritmos 2",
"java fundamentos",
"fundamentos em html",
"java script avançado",
"Mysql",
"Typescreipt",
"fundamentos em css",
]

console.log(cursos);   //acessando o valor no index 5, lembrando que começa com 0

console.log(cursos [5]);
console.log(cursos.indexOf("fundamentos em html"));

console.log(cursos.indexOf("Typescript"));

cursos.splice(0,1)
//para deletar um item na lista é necessário informar a posição do item e a quantidade de itens para deletar

console.log(cursos);

cursos.push("python") //inserindo item no final da lista
cursos.push("Angular") //inserindo item no final da lista

console.log(cursos);



for(let contador=0;contador<cursos.length;contador++){
    console.log("na posicao"+contador+"tem o valor="+cursos[contador]);


  console.log("==================");
  for (let contador =1; contador <= cursos.length; contador++) {
   //ajustando o acesso ao valor para localizar o indice correto, pois começa com 0
   //se eu inicio com 1 eu estaria pulando o primeiro item e acesso um item extra que não existe
   
    
    console.log("na posicao")+ contador + "tem valor=" + cursos[contador-1]);

}