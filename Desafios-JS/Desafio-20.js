// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = gets();
print(checaPalindromo(resultado));

function checaPalindromo(palavra) {
  var pal = palavra === palavra.split("").reverse().join("") ? "TRUE" : "FALSE";
  return pal;
}
