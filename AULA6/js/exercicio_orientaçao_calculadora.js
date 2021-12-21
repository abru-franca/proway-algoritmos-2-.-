
console.log("deu certo");

//criar uma calculadora com os atributos numeroA e numeroB
//criar os metodos somar, subtrair ,dividir, multiplicar,capturarNumeros e elerecebe por parametro o valor de A e B 

//esses metodos seram chamdos por botoes no html usando o onclick="nomeDaFuncao()"

class Calculadora {

    numeroA
    numeroB

    constructor(numeroA, numeroB) {
        this.numeroA = numeroA
        this.numeroB = numeroB
    }
    capturarNumeros(nA, nB, operacao) {
        this.numeroA = nA
        this.numeroB = nB
        switch (operacao) {
            case "somar":
                return this.somar()
                break;
            case "subtrair":
                return this.subtrair()
                break;
        }
    }


    somar() {
        return this.numeroA + this.numeroB
    }
    subtrair() {
        return this.numeroA - this.numeroB
    }
}

let calculadora = new Calculadora(1, 2)
console.log(" a soma é " + calculadora.somar());
console.log("a subtraçao é" + calculadora.subtrair());
console.log("a operaçao de somar é " + calculadora.capturarNumeros(5, 4, "somar"));
console.log("a operaçao de subtrair é "+calculadora.capturarNumeros(6,22,"subtrair"));