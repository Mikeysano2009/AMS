programa {
  funcao inicio() {
    
  }
}
qtd = int(input("Quantos números deseja digitar? "))
maior = None
vezes = 0

for i in range(qtd):
    num = float(input(f"Digite o {i+1}º número: "))
    if maior is None or num > maior:
        maior = num
        vezes = 1
    elif num == maior:
        vezes += 1

print(f"O maior número é {maior} e ele apareceu {vezes} vez(es).")
