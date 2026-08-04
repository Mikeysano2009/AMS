programa {
  funcao inicio() {
    
  }
}
programa antihack_freefire
{
    funcao inicio()
    {
        // Declaração de variáveis
        inteiro velocidade_jogador
        inteiro arquivo_suspeito
        inteiro uso_macro

        // Entrada de dados simulados
        escreva("--- SISTEMA ANTI-CHEAT (SIMULAÇÃO) ---\n")
        
        escreva("Digite a velocidade atual do jogador: ")
        leia(velocidade_jogador)

        escreva("O jogador usa arquivo modificado? (1 para Sim / 0 para Nao): ")
        leia(arquivo_suspeito)

        escreva("O jogador usa macro de tiro? (1 para Sim / 0 para Nao): ")
        leia(uso_macro)

        // Verificação de regras anti-hack
        se (velocidade_jogador > 100) {
            escreva("\n[ALERTA] Hack detectado: Velocidade anormal!\n")
            escreva("Ação: Conta banida permanentemente.\n")
        }
        senao se (arquivo_suspeito == 1) {
            escreva("\n[ALERTA] Hack detectado: Arquivo modificado (Mod/Script)!\n")
            escreva("Ação: Conta banida permanentemente.\n")
        }
        senao se (uso_macro == 1) {
            escreva("\n[ALERTA] Hack detectado: Uso de Macro!\n")
            escreva("Ação: Conta suspensa.\n")
        }
        senao {
            escreva("\n[STATUS] Jogador limpo. Boa partida!\n")
        }
    }
}
