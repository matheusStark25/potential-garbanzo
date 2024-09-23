def lucro_bruto() -> None:
    # Inicializa uma lista vazia para armazenar os resultados
    lista_resultado = []
    
    # Inicia um loop infinito
    while True:
        
        # Solicita ao usuário que digite a unidade e o valor
        try:
            unidade = int(input("Digite a unidade (ou um número negativo para sair):")) 
            if unidade < 0:
                print("Saindo...")
                break
            valor = float(input("Digite o valor: "))
        except ValueError:
            # Trata exceções de valor inválido
            print("valor invalido")  
        except TypeError:
            # Trata exceções de tipo inválido
            print("algo de errado")
        else:
            # Imprime a unidade e o valor se nenhuma exceção for levantada
            print(f"Unidade: {unidade}")
            print(f"Valor: {valor}")        
        
        
        
        # Verifica se a unidade ou o valor são menores ou iguais a 0  
        if unidade <= 0 or valor <= 0:
            # Se sim, imprime uma mensagem de erro e sai do loop
             print("Valores inválidos. Saindo...")
             break
     
              
        # Calcula o resultado (unidade * valor) 
        resultado = (unidade * valor)
            
        # Adiciona o resultado à lista de resultados
        lista_resultado.append(resultado)
        # Imprime a lista de resultados
        print(lista_resultado)

        # Imprime cada resultado da lista
        for result in lista_resultado:
            print(result)
            
        # Calcula o lucro bruto (soma dos resultados)      
        lucro_bruto= sum(lista_resultado)
        # Imprime a soma da lista de resultados 
        print(f"Sum of list -> {lista_resultado}")
        
               
# Chama a função mes_30dias()       
lucro_bruto()
lucro_Bruto = lucro_bruto()

def gastos() -> None:
    # Inicializa uma lista vazia para armazenar os gastos
    lista_gastos = []
    
    # Inicia um loop infinito
    while True:
        try:
            # Solicita ao usuário que digite o tipo de gasto e o valor
            tipo_gasto = input("Digite o tipo de gasto (ou 'sair' para finalizar): ")
            if tipo_gasto.lower() == "sair":
                print("Saindo...")
                break
            valor_gasto = float(input("Digite o valor do gasto: "))
        except ValueError:
            # Trata exceções de valor inválido
            print("Valor inválido. Tente novamente.")
        else:
            # Adiciona o gasto à lista de gastos
            lista_gastos.append(valor_gasto)
            print(f"Gasto adicionado: {tipo_gasto} - R$ {valor_gasto:.2f}")
    
    # Calcula o total de gastos
    total_gastos = sum(lista_gastos)
    
    # Imprime o total de gastos
    print(f"Total de gastos: R$ {total_gastos:.2f}")
    
    # Retorna o total de gastos
    return total_gastos

# Chama a função gastos()
total_gastos = gastos()

def lucro_liquido() -> None:
    # Chama a função lucro_bruto() para obter o lucro bruto
    lucro_bruto = lucro_bruto()
    
    # Chama a função gastos() para obter o total de gastos
    total_gastos = gastos()
    
    # Calcula o lucro líquido subtraindo o total de gastos do lucro bruto
    lucro_liquido = lucro_bruto - total_gastos
    
    # Imprime o lucro líquido
    print(f"Lucro líquido: R$ {lucro_liquido:.2f}")

# Chama a função lucro_liquido()
lucro_liquido()


    





