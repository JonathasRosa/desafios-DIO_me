//Desafios com JSON: Comparando os Pedidos
/*
Desafio
O objetivo desse desafio é criar um programa em JavaScript que compare dois objetos JSON de pedidos de entrega e determine se eles possuem ou não as mesmas informações. O programa deve criar dois objetos JSON contendo o nome do cliente, além do nome e preço de um item selecionado.

Entrada
O programa receberá os dados necessários para criar dois Clientes com seu respectivo Item de Pedido para comparação:

Cliente 1:
Nome (string): nome do primeiro cliente.
Nome do Item (string): nome do item de pedido selecionado para o primeiro cliente.
Preço do Item (number): preço do item de pedido selecionado para o primeiro cliente.
Cliente 2:
Nome (string): nome do segundo cliente.
Nome do Item (string): nome do item de pedido selecionado para o segundo cliente.
Preço do Item (number): preço do item de pedido selecionado para o segundo cliente.
Importante: a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.

Saída
Se todos os dados dos clientes forem estritamente iguais, o programa deverá retornar a mensagem:
Os pedidos são iguais

Caso contrário, o programa deverá retornar a mensagem:
Os pedidos são diferentes

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
Renan
Massa
45.0
Bianca
Kibe
8.0	Os pedidos são diferentes
Rafael
Pizza de calabresa
25.0
Rafael
Pizza de calabresa
25.0	Os pedidos são iguais
Aline
Hamburguer
15.0
Camila
Pizza
15.0	Os pedidos são diferentes
*/

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Criando um objeto chamado "pedido" as seguintes propriedades:
const pedido = {
    cliente: {
      nome: gets(),       // Lê a primeira linha da "Entrada": Nome do Cliente.
      endereco: gets(),   // Lê a segunda linha da "Entrada": Endereço do Cliente.
    },
    id: parseInt(gets()), // Lê a terceira linha da "Entrada": ID do Pedido.
  };
  //TODO: Leia a quarta linha da "Entrada": Telefone do Cliente.
  //TODO: Crie dinamicamente a propriedade "telefone" no objeto JSON "pedido.cliente".
  pedido.cliente.telefone = gets();
  //TODO: Imprima a saída formatada de acordo com este desafio.
  console.log(`Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}
  ID: ${pedido.id}
  Tel: ${pedido.cliente.telefone}`);