module.exports = class ProdutoModel {
  constructor (obj) {
    // Proteção para garantir que sempre será criado um objeto, 
    // mesmo que o parametro recebdido seja nulo.
    obj = obj || {};

    // Propriedades/atributos do modelo.
    this.id = parseInt(obj.id);
    this.nome = obj.nome;
    this.valor = obj.valor;
    this.qtdEstoque = obj.qtdEstoque;
  }
}