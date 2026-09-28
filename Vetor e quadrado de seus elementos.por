programa {
  funcao inicio() {
    
  }
}
#include <stdio.h>

int main() {
    float vetor[10];
    float quadrados[10];
    int i;

    for (i = 0; i < 10; i++) {
        printf("Digite o valor %d: ", i + 1);
        scanf("%f", &vetor[i]);

        quadrados[i] = vetor[i] * vetor[i];
    }

    printf("\nVetor original:\n");

    for (i = 0; i < 10; i++) {
        printf("%.2f ", vetor[i]);
    }

    printf("\n\nVetor com os quadrados:\n");

    for (i = 0; i < 10; i++) {
        printf("%.2f ", quadrados[i]);
    }

    printf("\n");

    return 0;
}
