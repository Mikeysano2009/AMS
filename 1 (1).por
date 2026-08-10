programa {
  funcao inicio() {
    
  }
}
soma = 0
quantidade = 0
quantidade_pares = 0
soma_pares = 0
quantidade_impares = 0
maior = None
menor = None

print("Digite valores inteiros positivos.")
print("Para encerrar o programa, digite um valor negativo.")

while True:
    numero = int(input("Digite um número: "))
    
    if numero < 0:
        break
        
    # Atualiza soma e quantidade total
    soma += numero
    quantidade += 1
    
    # Verifica o maior e o menor
    if maior is None or numero > maior:
        maior = numero
    if menor is None or numero < menor:
        menor = numero
        
    # Verifica par ou ímpar
    if numero % 2 == 0:
        quantidade_pares += 1
        soma_pares += numero
    else:
        quantidade_impares += 1

# Exibe os resultados
if quantidade > 0:
    media = soma / quantidade
    
    if quantidade_pares > 0:
        media_pares = soma_pares / quantidade_pares
    else:
        media_pares = 0
        
    porcentagem_impares = (quantidade_impares / quantidade) * 100

    print("\n--- Resultados ---")
    print(f"Soma dos números: {soma}")
    print(f"Quantidade de números digitados: {quantidade}")
    print(f"Média dos números digitados: {media:.2f}")
    print(f"Maior número digitado: {maior}")
    print(f"Menor número digitado: {menor}")
    print(f"Média dos números pares: {media_pares:.2f}")
    print(f"Porcentagem de números ímpares: {porcentagem_impares:.2f}%")
else:
    print("Nenhum número válido foi digitado.")
