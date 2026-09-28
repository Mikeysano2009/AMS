programa {
  funcao inicio() {
    
  }
}
#include <stdio.h>

int main() {
    int vetor[8];
    int X, Y;
    int soma;
    int i;

    for (i = 0; i < 8; i++) {
        printf("Digite o valor da posicao %d: ", i);
        scanf("%d", &vetor[i]);
    }

    printf("\nDigite a primeira posicao (X): ");
    scanf("%d", &X);

    printf("Digite a segunda posicao (Y): ");
    scanf("%d", &Y);

    soma = vetor[X] + vetor[Y];

    printf("\nSoma dos valores: %d\n", soma);

    return 0;
}
