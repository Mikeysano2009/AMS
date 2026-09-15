programa {
  funcao inicio() {
    
  }
}
#include <stdio.h>

int main() {
    int vetor[10];
    int pares = 0;

    
    for (int i = 0; i < 10; i++) {
        printf("Digite o valor da posicao %d: ", i);
        scanf("%d", &vetor[i]);
    }

   
    for (int i = 0; i < 10; i++) {
        if (vetor[i] % 2 == 0) {
            pares++;
        }
    }

    
    printf("\nO vetor possui %d valores pares.\n", pares);

    return 0;
}
