//Desafio: Pontos na Carteira
/* 
Desafio
A prefeitura da cidade B, inspirada por uma cidade A, decidiu implementar um sistema de câmeras que iria verificar se os carros estão acima de 80km/h. Porém, eles queriam também anotar a placa dos carros no banco de dados para que, a partir de 3 multas, os motoristas perdessem pontos diretamente na carteira de habilitação. Para isso, contrataram você para realizar esse programa, logo que você fez um trabalho tão bom para a cidade A.

Lembrando que toda vez que um carro é pego pela câmera e está acima da velocidade permitida automaticamente já é contabilizado uma multa para ele.

Entrada
A entrada será a velocidade que o veículo está e quantas multas ele já recebeu. Se ele estiver acima da velocidade, deve ser somado mais uma multa.

Saida
A saída deverá ser quantas multas o motorista já tem e se ele irá receber pontuação na carteira de habilitação.

Exemplo
Entrada	| Saída
---------------------------------------------------
80      |
1	      | "1 multas. Nao levou pontos na carteira" 
---------------------------------------------------
85      |
1	      | "2 multas. Nao levou pontos na carteira"
---------------------------------------------------
95      |
2	      | "3 multas. Levou pontos na carteira"
---------------------------------------------------
 */

//Resposta
// Para ler e escrever dados em Java, aqui na DIO padronizamos da seguinte forma:  
// - new Scanner(System.in): cria um leitor de Entradas, com métodos úteis com prefixo "next"; 
// - System.out.println:.imprime um texto de Saída (Output) e pulando uma linha.   

import java.util.Scanner; 
    
public class Program {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);
        int velocidade = leitor.nextInt();
        int multas = leitor.nextInt();
        
        // TODO: Crie a condição necessária para verificar se os carros estão acima da velocidade
        boolean limiteVelocidade = velocidade <= 80;
        // TODO2: Crie a condição para verificar se os motoristas receberão ou não pontos na carteira de habilitação
         if(limiteVelocidade == false){
          multas++;
        }
        if(multas >= 3){
          System.out.println(multas + " multas. " + "Levou pontos na carteira");
        }else{
          System.out.println(multas + " multas. " + "Nao levou pontos na carteira");
        }
    }
}
