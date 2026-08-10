programa {
  funcao inicio() {
    
  }
}
algoritmo "valida_opcao"
var
   opcao: inteiro

inicio
   // Inicializa a opção com um valor inválido (ex: 0) para garantir a entrada no laço
   opcao <- 0

   // Repete a leitura ENQUANTO a opção for menor que 1 OU maior que 5
   enquanto (opcao < 1) ou (opcao > 5) faca
      escreval("Digite uma opção válida (entre 1 e 5): ")
      leia(opcao)
      
      // Mensagem exibida caso a condição do laço seja verdadeira
      se (opcao < 1) ou (opcao > 5) entao
         escreval("Opção inválida! Tente novamente.")
         escreval("------------------------------------")
      fimse
   fimenquanto

   escreval("Opção válida escolhida: ", opcao)

fimalgoritmo
