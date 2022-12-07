const ProdutoModel = require("../models/ProdutoModel");

let produtos = [];
let idAtual = 1;

function cadastrar(obj) {
  let produto = new ProdutoModel(obj);
  produto.id = idAtual;

  produtos.push(produto);

  idAtual++;

  return produto;
}

function atualizar(obj) {
  
}

module.exports = {
  cadastrar
}