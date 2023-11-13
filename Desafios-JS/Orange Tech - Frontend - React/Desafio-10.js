//Desafio: Validação de Parênteses
/*
Desafio
Dada uma string com apenas os seguintes caracteres '(', ')', '{', '}', '[', ']' determine se uma determinada string é válida. 

Entrada
Uma string é considerada válida se:

Caracteres de abertura devem ser fechadas pelo mesmo tipo. Abertura devem ser fechados com uma chave correspondente. Uma string vazia é considerada válida. 

Saída
A saída corresponde a um valor Booleano como no exemplo abaixo:

Entrada	| Saída
[ ]     | true
( )     | true
[ )     | false
*/
/*
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

var isValid = function(s) {    
    const stack = []; 

 //TODO: implemente a lógica de caracteres válidos e retorne se a string é valida ou não.


}
*/
//Resposta
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