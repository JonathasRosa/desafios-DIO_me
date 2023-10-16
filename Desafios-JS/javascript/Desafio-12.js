// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++) {
  const numero = parseInt(gets());

  if (numero % 2 == 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else {
    if (menorNumeroImpar === 1) {
      menorNumeroImpar = numero;
    } else if (numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  }
}

print("Maior número par: " + maiorNumeroPar);
print("Menor número impar: " + menorNumeroImpar);
