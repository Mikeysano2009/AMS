programa {
  funcao inicio() {
    
  }
}
#include <stdio.h>

int main() {
    int A[6] = {1, 0, 5, -2, -5, 7};
    int soma;
    int i;

    soma = A[0] + A[1] + A[5];

    printf("Soma = %d\n", soma);

    A[4] = 100;

    printf("\nValores do vetor A:\n");

    for (i = 0; i < 6; i++) {
        printf("%d\n", A[i]);
    }

    return 0;
}
