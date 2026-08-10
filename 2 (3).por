programa {
  funcao inicio() {
    
  }
}
total_idades = 0
soma_idades = 0
pessoas_maiores = 0

while True:
    idade = int(input("Digite a idade: "))
    total_idades += 1
    soma_idades += idade
    
    if idade >= 21:
        pessoas_maiores += 1
        
    continuar = str(input("Quer continuar? [S/N] ")).strip().upper()[0]
    while continuar not in 'SN':
        print("Opção inválida! ", end="")
        continuar = str(input("Quer continuar? [S/N] ")).strip().upper()[0]
        
    if continuar == 'N':
        break

media_idades = soma_idades / total_idades

print("-=" * 20)
print(f"Total de idades digitadas: {total_idades}")
print(f"A média entre as idades digitadas é: {media_idades:.2f}")
print(f"Pessoas com 21 anos ou mais: {pessoas_maiores}")
