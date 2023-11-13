//Cálculo Salarial
/*
Desafio
Faça um programa que calcule e imprima o salário a ser transferido para um funcionário. Para realizar o calculo, primeiro receba o valor do salário bruto (valorSalario) e adicional dos benefícios (valorBeneficios). Por fim, o salário a ser transferido é calculado da seguinte maneira: 

(valorSalario - valorImpostos) + valorBeneficios

Para calcular o valorImpostos, seguem as aliquotas (baseadas no valor do salário bruto):

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%

Entrada
A entrada consiste em vários arquivos de teste, que conterá o valor do salário bruto (valorSalario) e adicional dos benefícios (valorBeneficios). Conforme mostrado no exemplo de entrada a seguir.

Saída
Para cada conjunto de Entradas (valorSalario e valorBeneficios), deverá ser calculada uma Saída. Para isso, basta imprimir uma linha com o resultado da seguinte fórmula:

saida = (valorSalario - valorImpostos) + valorBeneficios

Use o exemplo abaixo para entender melhor a formatação das Entradas e Saída.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	| Saída
2000    | 2050.00
250     |
-------------------
1100    | 1045.00
50      |
-------------------
3000    | 2960.00
400     | 
------------------
*/

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

/*
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Função útil para o calculo do imposto (baseado nas aliquotas).
function calcularImposto(salario) {
    let aliquota;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    }
    //TODO Criar as demais condições para as aliquotas de 10.00% e 15.00%.
    return aliquota * salario;
}

//Lê os valores de Entrada:
const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

//Calcula o imposto através da função "calcularImposto":
const valorImposto = calcularImposto(valorSalario);
//Calcula e imprime a Saída (com 2 casas decimais):
const saida = valorSalario - valorImposto + valorBeneficios;
print(saida.toFixed(2));
*/

//Função útil para o calculo do imposto (baseado nas aliquotas).
const valorSalarioBruto = parseFloat(gets())
const valorAbonoSalarial = parseFloat(gets())

function calcularPercentual(valor, percentual) {
 return valor * (percentual / 100);   
}

function pegarPercentualDeDescontoComBaseSalerio(salario) {
    if (salario >= 0 && salario <= 1100) {
       return 5;
    } else if (salario >= 1100.01 && salario <= 2500){
       return 10;
    } else {
       return 15;
    }
}

const valorImposto = (calcularPercentual(valorSalarioBruto,pegarPercentualDeDescontoComBaseSalerio(valorSalarioBruto)))
const valorFinal = valorSalarioBruto - valorImposto + valorAbonoSalarial;
console.log(valorFinal.toFixed(2));