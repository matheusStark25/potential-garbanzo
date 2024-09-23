// pega os valores questao no Html
function pegarValoresMercadoris() {
  //passo 1 pegar os valores no html
  const unidades = document.querySelectorAll(`.unidades`);
  const valor = document.querySelectorAll(`.valores`);

  //passo 2  crair os arrays vazios
  uni = [];
  val = [];

  //passo 3 passar pelo array de uni e verfificar se tem um numero valido
  unidades.forEach((unidade) => {
    const numero = parseFloat(unidade.value);
    if (!isNaN(numero) && numero >= 0) {
      uni.push(numero);
      //passo 4 adiciona a element(unidade)
    } else {
      ///passo 5 se for zero adiciona o valor com o push
      uni.push(0);
      unidade.value = `0`;
    }
  });

  //passo 6 passar pelo array de val e verfificar se tem u munero valido
  valor.forEach((valor) => {
    const numero = parseFloat(valor.value);
    if (!isNaN(numero) && numero >= 0) {
      val.push(numero);
      //passo 7 adiciona a element(valor)
    } else {
      //passo 8 se for zero adiciona o valor 0 com o push
      val.push(0);
      valor.value = `0`;
    }
  });

  console.log(`Valor de unidade (item ${uni}):`, uni);
  console.log(`Valor de (item ${val}):`, val);
  return { unidades: uni, valores: val };
}

// calcula o lucro bruto
function LucroBruto() {
  // passo 1 coloca a funçao valorespegos uma variavel
  let valoresPegos = pegarValoresMercadoris();
  // passo 2 cria variaveis vazias do resultado total e do valor total
  let resultadoMulti = 0;
  let resultadoTotal = 0;

  //  passo 3 verifica se o araay de unidade tem o mesmo tamanho do que o de valor
  if (valoresPegos.unidades.length === valoresPegos.valores.length) {
    // passo 4 passa pela varivel(objeto) de unidade e multiplica as unidades e valores
    for (let i = 0; i < valoresPegos.unidades.length; i++) {
      // passo 5 a varivel multiplicaçao vai receber o resultado dos indices multiplicados
      let multiplicacao = valoresPegos.unidades[i] * valoresPegos.valores[i];
      // passo 6  resultadoMulti recebeo resultado da multplicaçoa
      resultadoMulti += multiplicacao;
    }
    //  passo 7 resultado total recebe o resultadoda multiplicaçao
    resultadoTotal = resultadoMulti;
  }
  // passo 8 retornando o resultado total
  console.log(resultadoTotal);
  return resultadoTotal;
}

//console.log(totalmes());

// funçao pega valores dos gastos
function pegarValoresGastos() {
  return {
    luz: parseFloat(document.querySelector(`#luz`).value),
    agua: parseFloat(document.querySelector(`#agua`).value),
    aluguel: parseFloat(document.querySelector(`#aluguel`).value),
    internet: parseFloat(document.querySelector(`#internet`).value),
    funcionarios: parseInt(document.querySelector(`#funcionario`).value),
    valorFun: parseFloat(document.querySelector(`#valoresf`).value),
    resuladolucro: parseFloat(document.querySelector(`#resultado`)),
    resultadoDespesas: parseFloat(document.querySelector(`resultadol`)),
    resualtaodBruto: parseFloat(document.querySelector(`#resultadoBruto`)),
  };
}

// calcula das despesas
function despesasFixas() {
  const inputsValores = pegarValoresGastos();

  let resultadoluz = inputsValores.luz * 1;
  let resultadoagua = inputsValores.agua * 1;
  let resultadoaluguel = inputsValores.aluguel * 1;
  let resultadointer = inputsValores.internet * 1;
  let resultadoFun = inputsValores.funcionarios * inputsValores.valorFun;

  let despesasTotal =
    resultadoluz +
    resultadoagua +
    resultadoaluguel +
    resultadointer +
    resultadoFun;

  console.log(despesasTotal);
  return despesasTotal;
}

// calcula do lucro liquido
function lucroLiquido() {
  let totalBruto = parseFloat(LucroBruto());
  let despesasEmpresa = parseFloat(despesasFixas());

  if (!isNaN(totalBruto) && totalBruto !== 0 && despesasEmpresa !== 0) {
    let resultadomes = totalBruto - despesasEmpresa;
    console.log(resultadomes);
    return resultadomes;
  } else {
    console.log(
      "Não foi possível calcular o lucro líquido devido a valores inválidos."
    );
    return null;
  }
}
