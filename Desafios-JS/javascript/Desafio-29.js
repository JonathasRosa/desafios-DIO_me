//Desafio - Agendamento de Pagamento
/*
Descrição
Agora, para testar seus conhecimentos em lógica computacional utilizando conceitos de entradas e saídas, atribuição de variáveis e concatenação de Strings, vamos desenvolver uma solução algorítmica que simule o comportamento de um agendamento de pagamento. Buscando auxiliar os clientes de um sistema bancário a agendar seus pagamentos recorrentes, o programa deverá solicitar ao usuário informações sobre a conta a ser paga, como o nome do beneficiário, o valor da conta a ser paga e a data de vencimento. Em seguida, o programa fornecerá uma mensagem de confirmação do agendamento com as informações fornecidas.

Entrada
O programa deve solicitar as seguintes informações:

Nome do beneficiário.

Valor a ser pago (em reais, sem casas decimais).

Data de vencimento no formato "DD/MM/AAAA" (Dia, Mês e Ano separados por barras).

Saída
A saída deverá fornecer uma mensagem de confirmação, informando ao cliente que o agendamento foi realizado com sucesso. A mensagem deve conter as informações fornecidas pelo usuário de forma concatenada. O formato da mensagem de saída deve ser:

"Pagamento Agendado! Valor: R$ [Valor da Conta], vencimento [Data de Vencimento]."

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
Sabrina
5000
04/12/2023	Pagamento Agendado! Valor: R$ 5000, vencimento 04/12/2023.
Fabio
300
14/01/2023	Pagamento Agendado! Valor: R$ 300, vencimento 14/01/2023.
Marcelo
1000
31/12/2023	Pagamento Agendado! Valor: R$ 1000, vencimento 31/12/2023.
*/
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Saiba mais sobre Template Strings: 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals

let nomeBeneficiario;
let valorConta;
let dataVencimento;

// Neste bloco, temos as funções gets para ler os valores de entrada:
nomeBeneficiario = gets();
valorConta = parseFloat(gets());
dataVencimento = gets();

// Imprima a saída adequada utilizando o conceito de template strings:
print(`Pagamento Agendado! Valor: R$ ${valorConta}, vencimento ${dataVencimento}.`);