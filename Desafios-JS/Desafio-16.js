// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let n = parseInt(gets());

function soma(n) {
  if (n === 0) {
    return 0;
  } else {
    return n + soma(n - 1);
  }
}

print(soma(n));
