// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

var a = parseInt(gets());
var N = parseInt(gets());

//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".
function somar(x) {
  let multiplosDe3 = 0;
  for (i = 0; i <= N; i++) {
    if (i % a === 0) multiplosDe3 += i;
  }
  return multiplosDe3;
}
print(somar(a));
