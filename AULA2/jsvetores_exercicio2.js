console.log(" deu certo exc 2");
document.write("que legal")
document.write("<br> criar um vetor de numeros e solicite ao usuario uma quantidade de mumeros")
document.write("<br> conforme a quantidade repetir a captura numero a numero ate acabar o laço")
document.write("<br> depois que o laço acabar, percorrer a lista para determinar qual maior numero e menor");

let numeros= []
let quantidade
let numero
quantidade = Number(prompt("informe quantos numeros deseja capturar"))

for (let contador=1;contador<=quantidade;contador++){
    numero= Number (prompt("informe quantos numeros deseja capturar"))
numeros.push(numero)
}
console.log(numeros);

let menor 
let maior

for(let contador=0;contador<=numeros.length;contador++){

    if(contador==0)
    menor=numeros[contador]
    maior=numeros[contador]


    if(numeros[contador] <menor){
        menor=numero[contador]
    }else{
    }
    if(numeros[contador] > maior){
        maior=numero[contador]
    }

}



document.write("<br>O maior numero é"+menor)
document.write("<br>Omaior numero é"+maior)
