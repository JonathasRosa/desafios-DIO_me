//Desafio: FizzBuzz
/*
Desafio
Neste desafio, você terá que criar uma função que faça um número como argumento e retorne "Fizz", "Buzz" ou "FizzBuzz". 

Entrada
Você receberá um número onde: 
Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
Se o número for apenas múltiplo de 3 -> "Fizz" ; 
Se o número for apenas múltiplo de 5 -> "Buzz"; 
Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido; 

Saída
Retorne a palavra correta de acordo com o seu múltiplo. Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme exemplo abaixo:

EXEMPLO DE ENTRADA | EXEMPLO DE SAÍDA 
3                  | Fizz
5                  | Buzz
15                 | FizzBuzz 
4                  | 4 
*/
/*
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = gets();
print(fizzBuzz(resultado));

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.
*/
//Resposta
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = gets();
print(fizzBuzz(resultado));

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.

function fizzBuzz(n) {
  
  var temp;
  
  if((n%3===0) && (n%5===0)) {
    temp = "FizzBuzz";
  } else if (n%3===0) {
    temp = "Fizz";
  } else if (n%5===0) {
    temp = "Buzz";
  } else {
    temp = n;
  }
  
  return temp;
}