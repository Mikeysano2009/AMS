programa {
  funcao inicio() {
    
  }
}
num = int(input("Digite um número inteiro maior do que 1: "))
primo = True
if num > 1:
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            primo = False
            break
    if primo:
        print(f"O número {num} é primo.")
    else:
        print(f"O número {num} não é primo.")
else:
    print("Número inválido.")
