//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

function calcularValorTotal(n, pedidos, cupom) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    let [nome, valor] = pedidos[i].split(" ");
    valor = parseFloat(valor);
    total += valor;
  }

  if (cupom === "10%") {
    total *= 0.9;
  } else if (cupom === "20%") {
    total *= 0.8;
  }

  return total.toFixed(2);
}

const n = parseInt(gets());
const pedidos = [];
for (let i = 0; i < n; i++) {
  pedidos.push(gets());
}
const cupom = gets();

const valorTotal = calcularValorTotal(n, pedidos, cupom);

console.log(`Valor total: ${valorTotal}`);
