programa {
  funcao inicio() {
    
  }
}
habitantes = int(input("Número de habitantes: "))
valor_kwh = float(input("Valor do kWh: "))

maior_cons, menor_cons, soma_cons = None, None, 0
tot_res, tot_com, tot_ind = 0, 0, 0

for i in range(habitantes):
    consumo = float(input(f"Consumo do {i+1}º habitante (kWh): "))
    codigo = int(input("Código (1-Residencial, 2-Comercial, 3-Industrial): "))
    
    if maior_cons is None or consumo > maior_cons:
        maior_cons = consumo
    if menor_cons is None or consumo < menor_cons:
        menor_cons = consumo
        
    soma_cons += consumo
    
    if codigo == 1:
        tot_res += consumo
    elif codigo == 2:
        tot_com += consumo
    elif codigo == 3:
        tot_ind += consumo

media_cons = soma_cons / habitantes if habitantes > 0 else 0

print(f"\nMaior consumo: {maior_cons}")
print(f"Menor consumo: {menor_cons}")
print(f"Média de consumo: {media_cons:.2f}")
print(f"Total Residencial: {tot_res}")
print(f"Total Comercial: {tot_com}")
print(f"Total Industrial: {tot_ind}")
