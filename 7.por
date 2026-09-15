programa {
  funcao inicio() {
    
  }
}
#include <stdio.h>

int main() {
    int vetor[6];

   
    for (int i = 0; i < 6; i++) {
        do {
            printf("Digite um numero par para a posicao %d: ", i);
            scanf("%d", &vetor[i]);

            if (vetor[i] % 2 != 0) {
                printf("Numero invalido! Digite um numero par.\n");
            }

        } while (vetor[i] % 2 != 0);
    }

    
    printf("\nValores na ordem inversa:\n");

    for (int i = 5; i >= 0; i--) {
        printf("%d\n", vetor[i]);
    }

    return 0;
}
