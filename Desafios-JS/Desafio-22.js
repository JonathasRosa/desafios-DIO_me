// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
// - ".split(''): transforma a entrada em um array separado por aspas simples

let numeros = gets().split("");
const pares = [];
const impares = [];

for (let i = 0; i < numeros.length; i++) {
  numeros[i] % 2 == 0 ? pares.push(numeros[i]) : impares.push(numeros[i]);
}
print([...pares.reverse(), ...impares]);
