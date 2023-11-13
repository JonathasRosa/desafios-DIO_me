//Desafios com JSON: Avaliando Restaurantes
/*
Desafio
Você é um desenvolvedor de um aplicativo de delivery de comida muito popular na sua cidade. O aplicativo permite que os usuários encontrem e peçam comida de seus restaurantes favoritos diretamente do conforto de suas casas.

Um dos seus colegas de trabalho, que é responsável pela integração de novos restaurantes ao aplicativo, pediu sua ajuda para criar um código que exiba o restaurante com a melhor avaliação em uma página web. Para isso, ele forneceu um array de objetos JSON contendo informações sobre dois restaurantes.

Você, como um excelente desenvolvedor, decide ajudar seu colega de trabalho com este desafio e começa a escrever o código necessário para exibir as informações na tela. Seu desafio é criar um código em JavaScript que percorra uma array de dois objetos JSON contendo informações sobre os restaurantes, exibindo o nome e a avaliação do restaurante com a melhor avaliação.

Entrada
A entrada do seu código será os valores (nome e avaliação) dos seus objetos JSON, contendo informações necessárias sobre cada restaurante. Cada objeto terá as seguintes propriedades:

nome: o nome do restaurante, representado por uma string;
avaliacao: a avaliação média do restaurante, representado por um número de 0 a 5.
Saída
A saída do seu código será o nome e a avaliação do restaurante melhor avaliado. Lembre-se de formatar a avaliação com 1 casa decimal após a virgula, conform o exemplo a seguir:
Restaurante: ${restaurante.nome}, Avaliação: ${restaurante.avaliacao}

Caso eles tenham a mesma avaliação, imprima o primeiro a ser lido na Entrada.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
DIO
5.0
Feijuca
4.5	Restaurante: DIO, Avaliação: 5.0
Bar do Zé  
3.5
Pizza Boa
4.2	Restaurante: Pizza Boa, Avaliação: 4.2
Pizza Mania
4.0
Sabor Oriental
4.0	Restaurante: Pizza Mania, Avaliação: 4.0
*/

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const restaurantes = [
    {
      nome: gets(), 
      avaliacao: parseFloat(gets())
    },
    {
      nome: gets(), 
      avaliacao: parseFloat(gets())
    }
  ];
  
  //TODO: Usando o array acima identifique o restaurante com a melhor avaliação.
  //Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
  //Referência: https://stackoverflow.com/a/34087850/3072570
  //TODO: Imprima a saída de acordo com o enunciado deste desafio.
  
  let melhorRestaurante = restaurantes[0];
  
  for (let i = 1; i < restaurantes.length; i++) {
    if (restaurantes[i].avaliacao > melhorRestaurante.avaliacao) {
      melhorRestaurante = restaurantes[i];
    }
  }
  
  console.log(`Restaurante: ${melhorRestaurante.nome}, Avaliação: ${melhorRestaurante.avaliacao.toFixed(1)}`);
  