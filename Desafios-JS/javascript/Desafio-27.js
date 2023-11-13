// Desafio - Coleta de Tesouros no Dungeon
/*
Descrição
Sua missão é vasculhar as salas da masmorra em busca de recompensas lendárias e desafios perigosos. Cada sala pode conter monstros formidáveis, tesouros preciosos ou ambos. Use suas habilidades estratégicas para enfrentar as ameaças e coletar os tesouros!

Tarefa: Escreva um programa que simule sua jornada heróica pela masmorra. O programa deve percorrer cada sala e verificar se há tesouros ou monstros. Se você encontrar um tesouro, colecionará a recompensa. Se encontrar um monstro, terá que derrotá-lo para continuar.

Atenção
Em nossa resolução utilizamos a função.includes() do JavaScript para verificar se um número (representando a sala atual) está presente nos arrays salasComTesouro e salasComMonstro.

Entrada
O número total de salas no dungeon (um número inteiro).

Saída
Sempre que encontrar um tesouro, imprima " Tesouro na sala X!".

Sempre que encontrar um monstro, imprima "Monstro na sala X!".

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
3	Tesouro na sala 2!
Monstro na sala 3!
4	Tesouro na sala 2!
Monstro na sala 3!
Tesouro na sala 4!
2	Tesouro na sala 2!
*/
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
const totalSalas = parseInt(gets());

// Arrays que contêm as salas com tesouro e monstros
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

// Loop para percorrer cada sala da masmorra
for (let sala = 1; sala <= totalSalas; sala++) {
  // Verifique se a sala atual tem tesouro ou monstro
  const temTesouro = salasComTesouro.includes(sala);
  const temMonstro = salasComMonstro.includes(sala);

  // Imprime a mensagem apropriada com base nas condições
  if (temTesouro) {
    print("Tesouro na sala " + sala + "!");
  } else if (temMonstro) {
    print("Monstro na sala " + sala + "!");
  }
}