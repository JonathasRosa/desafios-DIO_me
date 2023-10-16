// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let arr = gets().split("");
function parentese(str) {
  if (str.length === 0) {
    return true;
  } else if (str.length === 1) {
    return false;
  } else if (str.length > 1 && str[0] === "(" && str[1] === ")") {
    return true;
  } else if (str.length > 1 && str[0] === "[" && str[1] === "]") {
    return true;
  } else if (str.length > 1 && str[0] === "{" && str[1] === "}") {
    return true;
  } else {
    return false;
  }
}
print(parentese(arr));