// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = gets();
print(fizzBuzz(resultado));

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.

function fizzBuzz(n) {
  var temp;

  if (n % 3 === 0 && n % 5 === 0) {
    temp = "FizzBuzz";
  } else if (n % 3 === 0) {
    temp = "Fizz";
  } else if (n % 5 === 0) {
    temp = "Buzz";
  } else {
    temp = n;
  }

  return temp;
}
