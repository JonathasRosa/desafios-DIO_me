// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let lines = gets().split("\n");
let n = parseInt(lines.shift());

let list = [];
let T = 0;

while (n >= 0) {
  list[n] = n;
  n--;
}
list.shift();
list.reverse();
if (list.length >= 4) {
  T = Math.floor((list[0] * list[1]) / list[2]);
  T = T + list[3];
  list.splice(0, 4);
  while (list.length >= 4) {
    T = T - Math.floor((list[0] * list[1]) / list[2]);
    T = T + list[3];
    list.splice(0, 4);
  }
  if (list.length == 3) {
    T = T - Math.floor((list[0] * list[1]) / list[2]);
    list.splice(0, 2);
  }

  if (list.length == 2) {
    T = T - Math.floor(list[0] * list[1]);
    list.splice(0, 2);
  }

  if (list.length == 1) {
    T = T - Math.floor(list[0]);
    list.splice(0, 2);
  }
}

print(T);
