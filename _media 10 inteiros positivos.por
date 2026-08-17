programa {
  funcao inicio() {
    
  }
}
soma = 0
contador = 0
while contador < 10:
    num = int(input(f"Digite o {contador+1}º inteiro: "))
    if num > 0:
        soma += num
        contador += 1
    else:
        print("Valor não positivo ignorado. Digite um número positivo.")
media = soma / 10
print(f"A média dos inteiros positivos é: {media}")
