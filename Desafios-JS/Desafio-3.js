//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorPedido = parseInt(gets());

//TODO: Criar as condições necessárias para impressão da saída conforme o enunciado.
// Recebe o valor total do pedido

if (valorPedido >= 50) {
  print(`Parabens, você ganhou uma sobremesa gratis!`);
} else {
  print(`Que pena, você nao ganhou nenhum brinde especial.`);
}
