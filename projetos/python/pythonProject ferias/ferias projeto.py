

def tipodeferias(op, salario):

    resultado = 0

    if op == 1:
        resultado = feriasSimples(salario)
        print("o valor a pagar das Ferias Simples será de R$:",resultado)
    elif op == 2:
        resultado = feriasVencidas(salario)
        print("o valor a pagar das Ferias Vencidas será de R$:", resultado)
    elif op == 3:
        nm = int(input("meses fora: "))
        resultado = FerisPropocionais(salario,nm)
        print("o valor a pagar das Ferias Vencidas será de R$:",resultado)

    return resultado


def feriasSimples(salario):
    calcAdicional = salario / 3
    soma = calcAdicional + salario
    return soma


def feriasVencidas(salario):
    calcAdicional = salario / 3
    soma = calcAdicional + salario
    total = soma * 2
    return total


def FerisPropocionais(salario,nm):
    somaProporcional = 0


    if nm > 15:
        print("considera um mes")
        proporcional = (salario * (nm +1))/12
        calcAdicional = proporcional / 3
        soma = proporcional + calcAdicional
        print("acrecentando um mes:",soma)
        return soma


    if nm < 14 or nm >= 14:
        print("nao considera um mes")
        proporcional = (salario * nm)/12
        calcAdicional = proporcional / 3
        soma = proporcional + calcAdicional
        return soma


    else:
        print("sem resultado")





salario = float(input("Digite o seu salário:"))
op = int(input("qual opçao voce vai escolher:\n"
               "1- ferias simples:\n "
               "2-ferias vencidas :\n"
               "3-FerisPropocionais:\n"))

resultado = tipodeferias(op, salario)