programa {
  funcao inicio() {
    
  }
}
#include <stdio.h>

int main() {
    int A[6] = {1, 0, 5, -2, -5, 7};
    int soma;

    // (b) Soma A[0], A[1] e A[5]
    soma = A[0] + A[1] + A[5];

    printf("Soma: %d\n", soma);

    // (c) Modifica a posição 4
    A[4] = 100;

    // (d) Mostra cada valor do vetor
    printf("\nValores do vetor A:\n");

    for (int i = 0; i < 6; i++) {
        printf("%d\n", A[i]);
    }

    return 0;
}
