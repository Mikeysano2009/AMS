programa {
  funcao inicio() {
    
  }
}
#include <stdio.h>

int main() {
    int vetor[10];
    int maior, posicao;

    
    for (int i = 0; i < 10; i++) {
        printf("Digite o valor da posicao %d: ", i);
        scanf("%d", &vetor[i]);
    }

   
    maior = vetor[0];
    posicao = 0;

   
    for (int i = 1; i < 10; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
            posicao = i;
        }
    }

   
    printf("\nVetor: ");
    for (int i = 0; i < 10; i++) {
        printf("%d ", vetor[i]);
    }

    
    printf("\nMaior elemento: %d", maior);
    printf("\nPosicao do maior elemento: %d\n", posicao);

    return 0;
}
