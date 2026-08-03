
programa
{
    funcao inicio()
    {
        inteiro soma = 0
        
        para (inteiro i = 1; i < 1000; i++)
        {
            se (i % 3 == 0 ou i % 5 == 0)
            {
                soma = soma + i
            }
        }
        
        escreva("A soma dos múltiplos de 3 ou 5 abaixo de 1000 é: ", soma)
    }
}

