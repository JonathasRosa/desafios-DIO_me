//Desafio: Matriz Par e Impar
/*
Desafio
Seu Raimundo tem uma lista de números. Porém, ele gosta muito das coisas em ordem e deseja que você o ajude a construir um programa que pegue todas as listas dele, uma de cada vez, e coloque os inteiros pares no início e os inteiros ímpares no final.

Entrada
A entrada são arrays de tamanho variado que possuem somente números inteiros.

Saída
A saída deverá retornar todos os valores pares para o começo do array, seguido pelos ímpares, conforme exemplo abaixo:

Exemplo 1
Entrada	| Saída
4,3,1,2 | 2,4,3,1
---------------------- 
Exemplo 2
Entrada	  | Saída
6,4,3,8,5 | 8,4,6,3,5
-------------------
Exemplo 3
Entrada	| Saída
1,0     | 0,1  
*/
/*
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
// - ".split(''): transforma a entrada em um array separado por aspas simples

let arr = gets().split(''); 
let arrVazio = []; 

// TODO: crie a condição necessária para que o array fique ordenado como o exercício pede
*/
//Resposta
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
// - ".split(''): transforma a entrada em um array separado por aspas simples

let numeros = gets().split(''); 
const pares = [];
const impares = [];

for(let i = 0; i < numeros.length; i++) {
  numeros[i] % 2 == 0 ? pares.push(numeros[i]) : impares.push(numeros[i]);
}
  print([...pares.reverse(), ...impares]);