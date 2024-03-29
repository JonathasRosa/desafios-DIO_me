//Desafio: Uma Chamada Recursiva
/*
Descrição
Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   

Entrada
A Entrada será composta por um número inteiro, N. 

Saída
Será  impresso o somatório de N até 0, como no exemplo a baixo: 

ENTRADA | SAÍDA
10      | 55
4       | 10
15      | 120
*/
/*
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let n = parseInt(gets());

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:

function somatorio(n){


}
*/
//Resposta
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let n = parseInt(gets());

function soma(n) {
  if(n===0) {
    return 0;
  } else {
    return n + soma(n-1);
  }
}

print(soma(n));