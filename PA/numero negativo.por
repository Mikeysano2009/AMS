 programa
{
    funcao inicio()
    {
        inteiro num, maior, menor
        logico primeiro = verdadeiro

        maior = 0
        menor = 0

        escreva("Digite um número inteiro (negativo para parar): \n")
        leia(num)

        enquanto (num >= 0)
        {
            se (primeiro == verdadeiro)
            {
                maior = num
                menor = num
                primeiro = falso
            }
            senao
            {
                se (num > maior)
                {
                    maior = num
                }
                se (num < menor)
                {
                    menor = num
                }
            }

            escreva("Digite outro número (negativo para parar): \n")
            leia(num)
        }

        se (primeiro == verdadeiro)
        {
            escreva("\nNenhum número positivo ou zero foi digitado.")
        }
        senao
        {
            escreva("\n--- Resultados ---")
            escreva("\nMaior número lido: ", maior)
            escreva("\nMenor número lido: ", menor)
        }
    }
}
