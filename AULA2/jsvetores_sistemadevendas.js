//precisamos catalogar todos os veiculos e seus valores
//para isso precisamos de 2 vetores um para os nomes e outro para os valores
// cada posição sera rspectivamente nome e valor 
// a quantidade de veiculo é indefinida até que informe que não deseja continuar com o cadastro
//após o cadastro exibir o nome e valor do primeiro veículo e do ultimo 

//primeiro é lista[0]
//ultimo lista[lista.length-1]

let nomes=[]
let valores=[]
let resposta
let valor 
let nome 
    

do{
    nome=prompt("informe o nome do veiculo")
nomes.push(nome)

valor=Number( prompt("informe o valor do veiculo"+nome))
valores.push(valor)

    resposta=prompt("deseja continuar S/N ?")
}while (resposta=="S" || resposta=="s")

alert("primeiro veiculo foi"+nomes[0]+"custando R$"+valores[0])
alert("primeiro veiculo foi"+nomes[nomes.length-1]+"custando R$"+valores[valores.length-1])
