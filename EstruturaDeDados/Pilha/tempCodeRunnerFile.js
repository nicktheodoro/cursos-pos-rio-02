var topo = null;
var quantidade = 0;

//Retorna o número de itens da Pilha;
function quantidadeItens () {
  return console.log(quantidade);
}

// Adiciona itens ao topo da pilha
function adicionar(dados) {
  var node = {
    dados: dados,
    proximo: null
  }

  node.proximo = topo;
  topo = node;

  quantidade++;
}

// Remove itens do topo da pilha
function remover () {
  if (topo == null) {
    return null;
  }

  var removido = topo;
  topo = topo.proximo;

  if ( quantidade > 0) {
    quantidade--
  }

  return removido.dados
}

function exibirTopo () {
  // if(topo == null) {
  //   return null;
  // } else {
  //   return console.log(topo.dados);
  // }

  return topo?.dados;
}

function exibirTodos() {

}

// adicionar('2022-10-11');
// adicionar('2022-10-12');
// adicionar('2022-10-13');
// adicionar('2022-10-14');
exibirTopo();