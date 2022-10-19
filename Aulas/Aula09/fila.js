let quantidade = 0;
let primeiro = null;
let ultimo = null;

function adicionar(data) {
  let node = {
    data: data,
    prox: primeiro
  }

  if (primeiro === null) {
    ultimo = node;
  }

  primeiro = node;

  quantidade++;
}

// Remove um item da fila
function remover() {
  // se a fila estiver vazia, retorna nulo
  if (ultimo === null) {
    return null;
  }

  else {
    let current = primeiro;
    let previous = null;

    while (current.prox) {
      previous = current;
      current = current.prox;
    }

    if (quantidade > 1) {
      previous.prox = null;

      ultimo = previous;
    }

    // zerar/reseta a fila
    else {
      primeiro = null;
      ultimo = null;
    }
    quantidade--;
  }
}

// exibe todos os itens na tela
function exibirTodos() {
  if (primeiro === null) {
    return null;
  } else {
    let arr = new Array();
    let current = primeiro;

    for (let i = 0; i < quantidade; i++) {
      arr[i] = current.data;
      current = current.prox;
    }

    return arr;
  }
}

adicionar('2022-10-01');
adicionar('2022-02-02');
adicionar('2020-11-10');
remover('2020-11-10');

console.log(exibirTodos());



