programa {
  funcao inicio() {
    
  }
}
#include <stdio.h>

int main() {
    float notas[15];
    float soma = 0;
    float media;
    int i;

    for (i = 0; i < 15; i++) {
        printf("Digite a nota do aluno %d: ", i + 1);
        scanf("%f", &notas[i]);

        soma += notas[i];
    }

    media = soma / 15;

    printf("\nMedia geral: %.2f\n", media);

    return 0;
}
