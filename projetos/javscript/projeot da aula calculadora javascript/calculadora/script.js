function calcular(tipo, valor) {
  if (tipo === "acao") {
    if (valor === "c") {
      // limpando o campo de input
      limpar();
    }

    if (
      valor === "+" ||
      valor === "-" ||
      valor === "*" ||
      valor === "/" ||
      valor === "."
    ) {
      document.querySelector(`#resultado`).value += valor;
    }

    if (valor === "=") {
      let campo = eval(document.querySelector(`#resultado`).value);
      document.querySelector(`#resultado`).value = campo;
    }
  } else if (tipo === "valor") {
    pegarValores(valor);
  }
}

function pegarValores(valor) {
  document.querySelector(`#resultado`).value += valor;
}

function limpar(valor) {
  document.querySelector(`#resultado`).value = "";
}
