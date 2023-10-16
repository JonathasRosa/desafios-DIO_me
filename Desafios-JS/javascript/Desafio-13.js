//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Função útil para o calculo do imposto (baseado nas aliquotas).
const valorSalarioBruto = parseFloat(gets());
const valorAbonoSalarial = parseFloat(gets());

function calcularPercentual(valor, percentual) {
  return valor * (percentual / 100);
}

function pegarPercentualDeDescontoComBaseSalerio(salario) {
  if (salario >= 0 && salario <= 1100) {
    return 5;
  } else if (salario >= 1100.01 && salario <= 2500) {
    return 10;
  } else {
    return 15;
  }
}

const valorImposto = calcularPercentual(
  valorSalarioBruto,
  pegarPercentualDeDescontoComBaseSalerio(valorSalarioBruto)
);
const valorFinal = valorSalarioBruto - valorImposto + valorAbonoSalarial;
console.log(valorFinal.toFixed(2));
