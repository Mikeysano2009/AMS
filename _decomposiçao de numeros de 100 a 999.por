programa {
  funcao inicio() {
    
  }
}
num = int(input("Digite um número inteiro entre 100 e 999: "))
if 100 <= num <= 999:
    centena = num // 100
    dezena = (num // 10) % 10
    unidade = num % 10
    print(f"Centena: {centena}")
    print(f"Dezena: {dezena}")
    print(f"Unidade: {unidade}")
else:
    print("Número fora do intervalo permitido.")
