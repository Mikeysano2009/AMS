programa {
  funcao inicio() {
    
  }
}
local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
	player.CharacterAdded:Connect(function(character)
		local humanoid = character:WaitForChild("Humanoid")
		local rootPart = character:WaitForChild("HumanoidRootPart")
		
		local ultimaPosicao = rootPart.Position
		
		while character.Parent do
			task.wait(1)
			if not rootPart.Parent then break end
			
			local distancia = (rootPart.Position - ultimaPosicao).Magnitude
			-- Se o jogador se mover mais do que o limite permitido por segundo (ex: 50 blocos) sem estar usando veículo
			if distancia > 50 and humanoid.Health > 0 then
				warn("Possível uso de SpeedHack detectado em: " .. player.Name)
				-- Você pode kickar o jogador ou redefinir a posição dele aqui:
				-- player:Kick("Detectado comportamento suspeito.")
			end
			
			ultimaPosicao = rootPart.Position
		end
	end)
end)
