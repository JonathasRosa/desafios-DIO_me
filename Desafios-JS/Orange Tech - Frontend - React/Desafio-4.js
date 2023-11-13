//Desafio: Os Números São Iguais
/*
Desafio
Nesse desafio, dados dois números, verifique se eles são iguais. Caso sejam, retorne "Sao iguais!”. Caso contrário, retorne "Nao sao iguais!” sem as aspas. 

Entrada
As entradas serão dois valores, um em cada linha, representados por A e B, que sempre serão números inteiros. 

Saída
A saída deverá retornar a frase "Sao iguais!" caso A e B sejam o mesmo valor. Caso contrário,  retorne "Nao sao iguais!", sem as aspas.

EXEMPLO | SAÍDA 
1       |
2       | Nao sao iguais! 
-------------------------
50      |
50      | Sao iguais! 
-------------------------
38      |
90      | Nao sao iguais! 
*/

/*
Código proposto
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let A = gets();
let B = gets();

//TODO: Imprima se os valores numéricos passados são iguais ou não.
*/
//Resposta
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let A = gets();
let B = gets();

//TODO: Imprima se os valores numéricos passados são iguais ou não.
function comparaNumeros(a, b) {
  if(a===b) {
    return "Sao iguais!";
  } else {
    return "Nao sao iguais!";
  }
}

print(comparaNumeros(A, B));