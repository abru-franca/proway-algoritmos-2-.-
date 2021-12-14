
let nome="bruna frança" //variável do tipo string
let idade=17   //variável do tipo number
let distanciaproway=8.0  //variável do tipo number

console.warn("ola meu nome é",nome,"e tenho",idade,"anos e moro a",distanciaproway,"km de distancia daqui");


//let bairro=prompt("informe o seu bairro")

//alert(bairro)

if(idade>=18){
console.log("vc é maior de idade");
}else{
console.log("vc é de menor");
}

if (idade>=15) {
    console.log("vc é menor de idade");
}else{
    
}





console.log("escolha uma opção");
console.log("1- primavera");
console.log("2-verão");
console.log("3-outono");
console.log("4-inverno");
let opcao=2

switch (opcao) {
    case 1:
        console.log("vc escolheu a primavera");
        
        break

   case 2:
       console.log(" vc escolheu verão");
        break
   case 3:
       console.log(" vc escolheu outono");
        break
   case 4:
       console.log(" vc escolheu inverno");
        break

        default:
            console.log("escolheu nada");
            break
}

let quantidade=15

for(let contador =1;contador<=quantidade;contador++){
console.log("repetindo pela ",contador,"x");


}

for(let variavel=1;variavel<=5;variavel+2){
    console.log("repetindo dnv pela",variavel,"ªx");
}
// let resposta
// do{

//   resposta= prompt("tinham 2 dog,pita e repita,pita morreu , quem ficou?")

// }while (resposta=="repita");
    
