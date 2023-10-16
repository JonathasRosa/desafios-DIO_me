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