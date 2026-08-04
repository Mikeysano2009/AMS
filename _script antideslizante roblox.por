programa {
  funcao inicio() {
    
  }
}
local parte = script.Parent

-- Ativa propriedades físicas customizadas
parte.CustomPhysicalProperties = PhysicalProperties.new(
    1.5,   -- Fricção (aumente para grudar mais, ex: 2.0 ou 3.0)
    0.3,   -- Elasticidade (quique)
    0.5,   -- Fricção na caída
    1,     -- Elasticidade na caída
    1      -- Peso
)
