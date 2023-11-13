//Desafio com JSON: DIO Delivery
/*
Desafio
A empresa DIO Delivery precisa calcular o valor total de um pedido e imprimir na tela as seguintes informações: o nome do cliente, o endereço de entrega e o total do pedido, incluindo a taxa de entrega, fixa de R$ 5.00.

Entrada
Entrada deverá receber os valores que preencherão o objeto JSON , ele deverá conter as seguintes propriedades:

cliente: uma string com o nome do cliente.
endereco: uma string com o endereço de entrega.
quantidade de itens: indica a quantidade de itens que devem ser lidos no array a seguir.
itens: um array de objetos que representam um item do pedido, com as seguintes propriedades:
nome (string)
preço (number)
Importante: a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.


Saída
Deverá retornar uma mensagem (string) que informa o nome do cliente, o endereço de entrega e o total do pedido, da seguinte maneira: 

Pedido: ${pedido.cliente}
Endereço de entrega: ${pedido.endereco}
Total: R$ ${totalCalculado}

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
João
Rua B, 456
2
Hamburguer 
15
Batata frita
8	Pedido: João
Endereco de entrega: Rua B, 456
Total: R$ 28.00
Carlos
Rua Dio, 123
2
Esfiha de Carne
5
Kibe
5	Pedido: Carlos
Endereco de entrega: Rua Dio, 123
Total: R$ 15.00
Sirius
Av. C, 789
1
Pizza
25	Pedido: Sirius
Endereco de entrega: Av. C, 789
Total: R$ 30.00
*/

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Aqui cria-se o objeto pedido com as informações do cliente, endereço, itens do pedido e taxa:
const pedido = {
    cliente: gets(),
    endereco: gets(),
    itens: [],
    taxaEntrega: 5.0
  };
  
  // Para popular o array de itens, criamos a seguinte estrutura de repetição:
  const quantidadeItens = parseInt(gets());
  while (pedido.itens.length < quantidadeItens) {
    const nomeItem = gets();
    const precoItem = parseFloat(gets());
    pedido.itens.push({ nome: nomeItem, preco: precoItem });
  }
  
  //TODO: Percorra o array de itens do pedido e calcule o seu valor total.
  let total =0;
  for(let i = 0; i < pedido.itens.length; i++){
    total += pedido.itens[i].preco;
  }
  //TODO: Imprima a saída no padrão descrito neste desafio.
  console.log(
    `Pedido: ${pedido.cliente}\n 
    Endereco de entrega: ${pedido.endereco}\n 
    Total: R$ ${(total + pedido.taxaEntrega).toFixed(2)}`);